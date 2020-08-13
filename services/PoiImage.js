const { PoiImage } = require("../models");

class PoiImageDto {
  async getPoiImages() {
    return await PoiImage.findAll();
  }

  async getPoiImagesByGuideId(id) {
    return await PoiImage.findAll({
      where: {
        guide_id: id,
      },
    });
  }

  async getPoiImageById(id) {
    return await PoiImage.findByPk(id);
  }

  async create(data) {
    return await PoiImage.create(data);
  }

  async remove(where) {
    return await PoiImage.destroy({ where });
  }
}

module.exports = PoiImageDto;
