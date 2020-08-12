const Joi = require("@hapi/joi");
const { guideTypes, poiTypes } = require("../utils/types");

const putGuideValidator = Joi.object({
  title: Joi.string(),
  days: Joi.number(),
  description: Joi.string(),
  type: Joi.number()
    .min(0)
    .max(guideTypes.length - 1),
});

module.exports = {
  putGuideValidator,
};
