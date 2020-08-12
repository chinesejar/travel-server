const Joi = require("@hapi/joi");

const putRoutePoiValidator = Joi.object({
  poi_id: Joi.number().min(1),
  description: Joi.string(),
});

module.exports = {
  putRoutePoiValidator,
};
