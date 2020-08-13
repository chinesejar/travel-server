const { RouteDto, GuideDto } = require("../services");
const { putRouteValidator } = require("../validators/Route");

const guideDto = new GuideDto();
const routeDto = new RouteDto();

class RouteController {
  static async get(ctx) {
    const user_id = ctx.state.id;
    const { guide_id } = ctx.query;
    ctx.body = await routeDto.getRoutes({ guide_id, user_id });
  }

  static async post(ctx) {
    const { guide_id } = ctx.request.body;
    const guide = await guideDto.getGuideById(guide_id);
    if (guide) {
      const user_id = ctx.state.id;
      ctx.body = await routeDto.create({ guide_id, user_id });
    } else {
      ctx.throw(404, "攻略不存在");
    }
  }

  static async put(ctx) {
    try {
      const user_id = ctx.state.id;
      const { id } = ctx.params;
      const data = await putRouteValidator.validateAsync(ctx.request.body);
      const route = await routeDto.getRoute({ id, user_id });
      if (route) {
        for (const key of Object.keys(data)) {
          route[key] = data[key];
        }
        route.save();
        ctx.body = route;
      } else {
        ctx.throw(404, "攻略不存在");
      }
    } catch (err) {
      ctx.throw(400, err);
    }
  }

  static async getOne(ctx) {
    const { id } = ctx.params;
    const route = await routeDto.getRouteById(parseInt(id));
    if (route) {
      ctx.body = route;
    } else ctx.throw(404, "没有数据");
  }

  static async delete(ctx) {
    const user_id = ctx.state.id;
    const { id } = ctx.params;
    await routeDto.remove({ id: parseInt(id), user_id });
    ctx.body = { message: "删除成功" };
  }
}

module.exports = RouteController;
