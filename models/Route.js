const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('Route', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    guide_id: { // 对应 guide 表
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: { // 对应 user 表
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      comment: "攻略标题",
    },
    description: {
      type: DataTypes.TEXT,
      comment: "攻略描述",
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "行程中的第几天"
    },
    index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "行程中路线序号"
    },
    start_poi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "起点poi"
    },
    end_poi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "终点poi"
    },
    geometry: {
      type: DataTypes.GEOMETRY("LINESTRING"),
      comment: "路线 polyline"
    },
  })
}
