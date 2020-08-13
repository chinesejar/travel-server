const fs = require("fs");
const { PoiImageDto } = require("../services");

const poiImageDto = new PoiImageDto();

class PoiImageController {
  static async post(ctx) {
    const file = ctx.request.files?.file;
    if (!file) ctx.throw(400, "没有上传文件");
    const { name, size, type, path } = file;
    const user_id = ctx.state.id;
    const { route_poi_id } = ctx.request.body;
    const fileStream = fs.createReadStream(path);
    const putPromise = () => {
      return new Promise((res, rej) => {
        ctx.minio.putObject(
          "poi-image",
          `${user_id}/${name}`,
          fileStream,
          size,
          type,
          function (e) {
            if (e) {
              rej(e);
            }
            res("上传成功");
          }
        );
      });
    };
    try {
      const res = await putPromise();
      const poiImage = poiImageDto.create({
        route_poi_id,
        user_id,
        name: `${user_id}/${name}`,
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
    const { id } = ctx.params;
    await poiImageDto.remove({ id, user_id });
    ctx.body = { message: "删除成功" };
  }
}

module.exports = PoiImageController;
