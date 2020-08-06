const Joi = require('@hapi/joi');
const { guideTypes, poiTypes } = require('../utils/types');

const putGuideValidator = Joi.object({
  title: Joi.string(),
  days: Joi.number(),
  description: Joi.string(),
  type: Joi.number().min(0).max(guideTypes.length - 1),
  routes: Joi.array().items({
    id: Joi.number().min(1),
    guide_id: Joi.number().min(1),
    user_id: Joi.number().min(1),
    title: Joi.string(),
    index: Joi.number().min(0),
    day: Joi.number().min(1),
    start_poi: Joi.number().min(1),
    end_poi: Joi.number().min(1),
    geometry: Joi.string().allow(null),
    description: Joi.string(),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
    pois: Joi.array().items({
      id: Joi.number().min(1),
      type: Joi.number().min(0).max(poiTypes.length - 1),
      description: Joi.string(),
      poi: Joi.number().min(1)
    })
  })
})

module.exports = {
  putGuideValidator
}