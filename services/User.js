const { User } = require("../models");

class UserDto {
  async getUsers() {
    return await User.findAll();
  }

  async getUserByUsername(username) {
    return await User.findOne({
      where: {
        username
      }
    })
  }

  async getUserById(id) {
    return await User.findByPk(id);
  }

  async create(user) {
    return await User.create(user);
  }
}

module.exports = UserDto;
