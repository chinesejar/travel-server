const { RoutePoi } = require("../models");

class RoutePoiDto {
  async getRoutePois(where) {
    return await RoutePoi.findAll({ where });
  }

  async getRoutePoi(where) {
    return await RoutePoi.findOne({ where });
  }

  async getRoutePoiById(id) {
    return await RoutePoi.findByPk(id);
  }

  async create(data) {
    return await RoutePoi.create(data);
  }

  async remove(where) {
    return await RoutePoi.destroy({ where });
  }
}

module.exports = RoutePoiDto;
