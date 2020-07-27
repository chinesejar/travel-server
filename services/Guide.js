const { Guide } = require("../models");

class GuideDto {
  async getGuides() {
    return await Guide.findAll();
  }

  async getGuideById(id) {
    return await Guide.findByPk(id);
  }

  async create(guide) {
    return await Guide.create(guide);
  }
}

module.exports = GuideDto;
