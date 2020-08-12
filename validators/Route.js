const Joi = require("@hapi/joi");

const putRouteValidator = Joi.object({
  title: Joi.string(),
  day: Joi.number().min(1),
  start_poi: Joi.number().min(1),
  end_poi: Joi.number().min(1),
  geometry: Joi.string().allow(null),
  description: Joi.string(),
});

module.exports = {
  putRouteValidator,
};
