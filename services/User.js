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

  async getUserByUsernameWithoutPassword(username) {
    return await User.findOne({
      where: {
        username
      },
      attributes: ['id', 'username', 'gender']
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
