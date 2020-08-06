const { PoiDto } = require("../services");
const { createPoiValidator } = require("../validators/Poi");
const { poiTypes } = require('../utils/types');

const poiDto = new PoiDto();

class PoiController {
  static async get(ctx) {
    ctx.body = await poiDto.getPois();
  }

  static async post(ctx) {
    try {
      const data = await createPoiValidator.validateAsync(ctx.request.body);
      ctx.body = await poiDto.create(data);
    } catch (err) {
      ctx.throw(400, err);
    }
  }

  static async getOne(ctx) {
    const { id } = ctx.params;
    const poi = await poiDto.getPoiById(parseInt(id));
    if (poi) {
      ctx.body = poi;
    } else ctx.throw(404, "没有数据");
  }

  static async getTypes(ctx) {
    ctx.body = poiTypes;
  }
}

module.exports = PoiController;
