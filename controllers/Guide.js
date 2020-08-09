const { GuideDto, RouteDto, RoutePoiDto } = require("../services");
const { putGuideValidator } = require("../validators/Guide");
const { guideTypes } = require("../utils/types");

const guideDto = new GuideDto();
const routeDto = new RouteDto();
const routePoiDto = new RoutePoiDto();

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
          const {
            id,
            title,
            description,
            day,
            start_poi,
            end_poi,
            geometry,
            pois,
          } = data.routes[i];
          var route;
          if (id) {
            route = await routeDto.getRouteById(id);
            route.title = title;
            route.description = description;
            route.day = day;
            route.start_poi = start_poi;
            route.end_poi = end_poi;
            route.index = i;
            route.user_id = user;
            route.guide_id = guide.id;
            route.save();
          } else {
            route = await routeDto.create({
              title,
              description,
              day,
              start_poi,
              end_poi,
              index: i,
              user_id: user,
              guide_id: guide.id,
            });
          }
          for (const { poi_id, id, description } of pois) {
            if (poi_id) {
              const routePoi = await routePoiDto.getRoutePoiById(id);
              routePoi.poi_id = poi_id;
              routePoi.description = description;
            } else {
              await routePoiDto.create({
                route_id: route.id,
                poi_id: id,
                description,
              });
            }
          }
        }
        ctx.body = guide;
      } else ctx.throw(404, "攻略不存在");
    } catch (err) {
      console.log(err);
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
