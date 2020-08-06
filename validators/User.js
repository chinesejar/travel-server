const Joi = require('@hapi/joi');

const registerUserValidator = Joi.object({
  username: Joi.string().min(6).max(30).required(),
  password: Joi.string().required(),
  gender: Joi.number().min(0).max(2).default(0),
})

const authUserValidator = Joi.object({
  username: Joi.string().min(6).max(30).required(),
  password: Joi.string().required(),
})

module.exports = {
  registerUserValidator,
  authUserValidator,
}