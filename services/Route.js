const { Route } = require("../models");

class RouteDto {
  async getRoute() {
    return await Route.findAll();
  }

  async getRoutesByGuideId(id) {
    return await Route.findAll({
      where: {
        guide_id: id
      }
    });
  }

  async getRouteById(id) {
    return await Route.findByPk(id);
  }

  async create(route) {
    return await Route.create(route);
  }
}

module.exports = RouteDto;
