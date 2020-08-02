const { RouteDto } = require("../services");

const routeDto = new RouteDto();

class RouteController {
  static async get(ctx) {
    ctx.body = await routeDto.getRoutes();
  }

  static async getOne(ctx) {
    const { id } = ctx.params;
    const route = await routeDto.getRouteById(parseInt(id));
    if (route) {
      ctx.body = route;
    } else ctx.throw(404, "没有数据");
  }
}

module.exports = RouteController;
