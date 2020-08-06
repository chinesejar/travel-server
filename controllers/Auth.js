const { UserDto } = require('../services');
const { registerUserValidator, authUserValidator } = require('../validators/User');
const crypto = require('crypto');
const auth = require('../utils/auth');

const userDto = new UserDto();

class UserController {
  static async login(ctx) {
    try {
      const data = await authUserValidator.validateAsync(ctx.request.body);
      console.log(data);
      const { username, password } = data;
      const user = await userDto.getUserByUsername(username);
      if (!user) ctx.throw(404, "用户不存在");
      const cryptPass = crypto.createHash('md5').update(password).digest('hex');
      if (user.password !== cryptPass) ctx.throw(400, "密码错误");
      const token = auth.sign(ctx, { id: user.id, username });
      ctx.body = {
        token
      }
    } catch (err) {
      ctx.throw(400, err);
    }
  }

  static async register(ctx) {
    try {
      const data = await registerUserValidator.validateAsync(ctx.request.body);
      const { username, password } = data;
      let user = await userDto.getUserByUsername(username);
      if (user) ctx.throw(400, "用户已注册");
      const cryptPass = crypto.createHash('md5').update(password).digest('hex');
      user = await userDto.create({ username, password: cryptPass });
      const token = auth.sign(ctx, { id: user.id, username });
      ctx.body = {
        token
      }
    } catch (err) {
      ctx.throw(400, err);
    }
  }
}

module.exports = UserController;
