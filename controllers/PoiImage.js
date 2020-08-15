const { PoiImageDto, StorageDto } = require("../services");

const poiImageDto = new PoiImageDto();
const storageDto = new StorageDto();

class PoiImageController {
  static async post(ctx) {
    const file = ctx.request.files.file;
    if (!file) ctx.throw(400, "没有上传文件");
    try {
      const user_id = ctx.state.id;
      const { route_poi_id } = ctx.request.body;
      const { name } = file;
      await storageDto.put(ctx.minio, "poi-image", file, user_id, route_poi_id);
      const poiImage = poiImageDto.create({
        route_poi_id,
        user_id,
        name: `${user_id}/${route_poi_id}/${name}`,
      });
      ctx.body = poiImage;
    } catch (err) {
      ctx.throw(400, err);
    }
  }

  static async get(ctx) {
    ctx.body = await poiImageDto.getPois();
  }

  static async getOne(ctx) {
    const { id } = ctx.params;
    const poi = await poiImageDto.getPoiById(parseInt(id));
    if (poi) {
      ctx.body = poi;
    } else ctx.throw(404, "没有数据");
  }

  static async delete(ctx) {
    const user_id = ctx.state.id;
    const { name, id } = ctx.request.body;
    try {
      await storageDto.delete(ctx.minio, "poi-image", name);
      await poiImageDto.remove({ route_poi_id: id, name, user_id });
      ctx.body = { message: "删除成功" };
    } catch (err) {
      console.log(err);
      ctx.throw(400, err);
    }
  }
}

module.exports = PoiImageController;
