const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('PoiImage', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    poi_id: { // 对应 poi 表
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
