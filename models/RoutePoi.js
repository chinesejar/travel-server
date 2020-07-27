const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('RoutePoi', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    route_id: { // 对应 route 表
      type: DataTypes.UUID,
      allowNull: false,
    },
    poi_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "点poi"
    },
    description: {
      type: DataTypes.TEXT,
      comment: "描述"
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "备注"
    }
  })
}
