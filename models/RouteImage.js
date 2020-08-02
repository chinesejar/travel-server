const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('RouteImage', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    guide_id: { // 对应 guide 表
      type: DataTypes.UUID,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "图片地址"
    },
  })
}
