const { User } = require('../models');

class UserController {
  static async register(ctx) {
    ctx.body = "Hello";
  }
}

module.exports = UserController;
