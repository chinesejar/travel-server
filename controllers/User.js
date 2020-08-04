const { UserDto } = require('../services');

const userDto = new UserDto();

class UserController {
  static async get(ctx) {
    const { username } = ctx.state;
    const user = await userDto.getUserByUsernameWithoutPassword(username);
    if (!user) ctx.throw(404, "用户不存在");
    ctx.body = user;
  }
}

module.exports = UserController;
