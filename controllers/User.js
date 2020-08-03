const { UserDto } = require('../services');
const { registerUserValidator, authUserValidator } = require('../validators/User');

const userDto = new UserDto();

class UserController {
  static async login(ctx) {
    const err = authUserValidator(ctx.request.body);
    if (err) {
      ctx.throw(400, err);
    } else {
      const { username, password } = ctx.request.body;
      const user = await userDto.getUserByUsername(username);
      if (!user) ctx.throw(404, "用户不存在");
      if (user.password !== password) ctx.throw(400, "密码错误");
      ctx.body = user;
    }
  }

  static async register(ctx) {
    ctx.body = "Hello";
  }
}

module.exports = UserController;
