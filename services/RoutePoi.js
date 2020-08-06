const { RoutePoi } = require("../models");

class RoutePoiDto {
  async getRoutePois() {
    return await RoutePoi.findAll();
  }

  async getRoutePoiByRouteId(id) {
    return await RoutePoi.findAll({
      where: {
        guide_id: id
      }
    });
  }

  async getRoutePoiById(id) {
    return await RoutePoi.findByPk(id);
  }

  async create(data) {
    return await RoutePoi.create(data);
  }
}

module.exports = RoutePoiDto;
