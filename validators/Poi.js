const { poiTypes } = require('../utils/types');
const Joi = require('@hapi/joi');

const createPoiValidator = Joi.object({
  name: Joi.string(),
  type: Joi.number().min(0).max(poiTypes.length - 1),
  address: Joi.string().allow(""),
  province: Joi.string(),
  city: Joi.string(),
  district: Joi.string(),
  geometry: Joi.object({
    type: 'Point',
    coordinates: Joi.array().items(
      Joi.number().min(-180).max(180),
      Joi.number().min(-90).max(90),
    )
  }),
  source: Joi.string(),
})

module.exports = {
  createPoiValidator,
}