const fs = require('fs');
const { RouteImageDto } = require("../services");

const routeImageDto = new RouteImageDto();

class RouteImageController {

  static async post(ctx) {
    const file = ctx.request.files?.file;
    if (!file) ctx.throw(400, "没有上传文件");
    const { name, size, type, path } = file;
    const fileStream = fs.createReadStream(path);
    const putPromise = () => {
      return new Promise((res, rej) => {
        ctx.minio.putObject('route-image', name, fileStream, size, type, function (e) {
          if (e) {
            rej(e)
          }
          res("上传成功");
        })
      })
    }
    try {
      const res = await putPromise();
      ctx.body = res;
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
}

module.exports = RouteImageController;
