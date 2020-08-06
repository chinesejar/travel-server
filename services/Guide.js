const { Guide, Route, Poi } = require("../models");

class GuideDto {
  async getGuides() {
    return await Guide.findAll({
      include: [{
        model: Route, as: 'routes', include: ['pois']
      }]
    });
  }

  async getGuide(where) {
    return await Guide.findOne({
      where
    });
  }

  async getGuideById(id) {
    return await Guide.findByPk(id);
  }

  async create(guide) {
    return await Guide.create(guide);
  }
}

module.exports = GuideDto;
