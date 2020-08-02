const { PoiDto } = require("../services");
const { createPoiValidator } = require("../validators/Poi");
const { poiTypes } = require('../utils/types');

const poiDto = new PoiDto();

class PoiController {
  static async get(ctx) {
    ctx.body = await poiDto.getPois();
  }

  static async post(ctx) {
    const err = createPoiValidator(ctx.request.body);
    if (err) ctx.throw(400, err);
    else ctx.body = await poiDto.create(ctx.request.body);
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
