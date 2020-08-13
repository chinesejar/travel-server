const fs = require("fs");
const { RouteImageDto } = require("../services");

const routeImageDto = new RouteImageDto();

class RouteImageController {
  static async post(ctx) {
    const { file } = ctx.request.files;
    if (!file) ctx.throw(400, "没有上传文件");
    const user_id = ctx.state.id;
    const { route_id } = ctx.request.body;
    const { name, size, type, path } = file;
    const fileStream = fs.createReadStream(path);
    const putPromise = () => {
      return new Promise((res, rej) => {
        ctx.minio.putObject(
          "route-image",
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
      const routeImage = routeImageDto.create({
        route_id,
        user_id,
        name: `${user_id}/${name}`,
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
    const { id } = ctx.params;
    await routeImageDto.remove({ id, user_id });
    ctx.body = { message: "删除成功" };
  }
}

module.exports = RouteImageController;
