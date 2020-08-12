const { Poi } = require("../models");

class PoiDto {
  async getPois(where) {
    return await Poi.findAll({ where });
  }

  async getPoiById(id) {
    return await Poi.findByPk(id);
  }

  async create(poi) {
    return await Poi.create(poi);
  }
}

module.exports = PoiDto;
