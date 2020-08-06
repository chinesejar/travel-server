const { GuideDto, RouteDto } = require("../services");
const { putGuideValidator } = require("../validators/Guide");
const { guideTypes } = require('../utils/types');

const guideDto = new GuideDto();
const routeDto = new RouteDto();

class GuideController {
  static async get(ctx) {
    ctx.body = await guideDto.getGuides();
  }

  static async post(ctx) {
    const { id } = ctx.state;
    ctx.body = await guideDto.create({ user: id });
  }

  static async put(ctx) {
    try {
      const data = await putGuideValidator.validateAsync(ctx.request.body);
      const { id } = ctx.params;
      const user = ctx.state.id;
      const guide = await guideDto.getGuide({ id: parseInt(id), user });
      if (guide) {
        for (const key in data) {
          guide[key] = data[key];
        }
        guide.save();
        for (let i = 0; i < data.routes.length; i++) {
          const route = data.routes[i];
          route.index = i;
          route.user_id = user;
          route.guide_id = guide.id;
          await routeDto.create(route);
        }
        ctx.body = guide;
      } else ctx.throw(404, "攻略不存在");
    } catch (err) {
      ctx.throw(400, err);
    }
  }

  static async getOne(ctx) {
    const { id } = ctx.params;
    const guide = await guideDto.getGuideById(parseInt(id));
    if (guide) {
      const routes = await routeDto.getRoutesByGuideId(id);
      ctx.body = { ...guide.dataValues, routes };
    } else ctx.throw(404, "没有数据");
  }

  static async getTypes(ctx) {
    ctx.body = guideTypes;
  }
}

module.exports = GuideController;
