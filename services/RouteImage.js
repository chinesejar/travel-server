const { RouteImage } = require("../models");

class RouteImageDto {
  async getRouteImages() {
    return await RouteImage.findAll();
  }

  async getRouteImagesByGuideId(id) {
    return await RouteImage.findAll({
      where: {
        guide_id: id,
      },
    });
  }

  async getRouteImageById(id) {
    return await RouteImage.findByPk(id);
  }

  async create(data) {
    return await RouteImage.create(data);
  }

  async remove(where) {
    return await RouteImage.destroy({ where });
  }
}

module.exports = RouteImageDto;
