const { GuideDto, RouteDto } = require("../services");
const { createGuideValidator } = require("../validators/Guide");
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
