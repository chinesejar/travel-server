const { Route, RoutePoi, RouteImage } = require("../models");

class RouteDto {
  async getRoute(where) {
    return await Route.findOne({
      where,
      include: [
        { model: RoutePoi, as: "pois", include: ["images"] },
        { model: RouteImage, as: "images" },
      ],
    });
  }

  async getRoutes(where) {
    return await Route.findAll({
      where,
      include: [
        { model: RoutePoi, as: "pois", include: ["images"] },
        { model: RouteImage, as: "images" },
      ],
    });
  }

  async getRouteById(id) {
    return await Route.findByPk(id);
  }

  async create(route) {
    return await Route.create(route);
  }

  async remove(where) {
    return await Route.destroy({ where });
  }
}

module.exports = RouteDto;
