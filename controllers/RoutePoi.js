const { RouteDto, RoutePoiDto } = require("../services");
const { putRoutePoiValidator } = require("../validators/RoutePoi");

const routePoiDto = new RoutePoiDto();
const routeDto = new RouteDto();

class RoutePoiController {
  static async get(ctx) {
    const user_id = ctx.state.id;
    const { route_id } = ctx.query;
    ctx.body = await routePoiDto.getRoutePois({ route_id, user_id });
  }

  static async post(ctx) {
    const { route_id } = ctx.request.body;
    const route = await routeDto.getRouteById(route_id);
    if (route) {
      const user_id = ctx.state.id;
      ctx.body = await routePoiDto.create({ route_id, user_id });
    } else {
      ctx.throw(404, "路线不存在");
    }
  }

  static async put(ctx) {
    try {
      const user_id = ctx.state.id;
      const { id } = ctx.params;
      const data = await putRoutePoiValidator.validateAsync(ctx.request.body);
      const routePoi = await routePoiDto.getRoutePoi({ id, user_id });
      if (routePoi) {
        for (const key of Object.keys(data)) {
          routePoi[key] = data[key];
        }
        routePoi.save();
        ctx.body = routePoi;
      } else {
        ctx.throw(404, "攻略推荐点不存在");
      }
    } catch (err) {
      ctx.throw(400, err);
    }
  }

  static async getOne(ctx) {
    const { id } = ctx.params;
    const routePoi = await routePoiDto.getRouteById(parseInt(id));
    if (routePoi) {
      ctx.body = routePoi;
    } else ctx.throw(404, "没有数据");
  }
}

module.exports = RoutePoiController;
