const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: { // 性别 0 未知 1 男 2 女
      type: DataTypes.ENUM([0, 1, 2]),
      default: 0,
    },
  })
}
