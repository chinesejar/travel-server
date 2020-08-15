const { RouteImageDto, StorageDto } = require("../services");

const routeImageDto = new RouteImageDto();
const storageDto = new StorageDto();

class RouteImageController {
  static async post(ctx) {
    const { file } = ctx.request.files;
    if (!file) ctx.throw(400, "没有上传文件");
    const user_id = ctx.state.id;
    const { route_id } = ctx.request.body;
    const { name } = file;
    try {
      await storageDto.put(ctx.minio, "route-image", file, user_id, route_id);
      const routeImage = routeImageDto.create({
        route_id,
        user_id,
        name: `${user_id}/${route_id}/${name}`,
      });
      ctx.body = routeImage;
    } catch (err) {
      ctx.throw(400, err);
    }
  }

  static async get(ctx) {
    ctx.body = await routeImageDto.getRoutes();
  }

  static async getOne(ctx) {
    const { id } = ctx.params;
    const route = await routeImageDto.getRouteById(parseInt(id));
    if (route) {
      ctx.body = route;
    } else ctx.throw(404, "没有数据");
  }

  static async delete(ctx) {
    const user_id = ctx.state.id;
    const { name, id } = ctx.request.body;
    try {
      await storageDto.delete(ctx.minio, "route-image", name);
      await routeImageDto.remove({ route_id: id, name, user_id });
      ctx.body = { message: "删除成功" };
    } catch (err) {
      ctx.throw(400, err);
    }
  }
}

module.exports = RouteImageController;
