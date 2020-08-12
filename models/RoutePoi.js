const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("RoutePoi", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    route_id: {
      // 对应 route 表
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      // 对应 user 表
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    poi_id: {
      type: DataTypes.INTEGER,
      comment: "点poi",
    },
    description: {
      type: DataTypes.TEXT,
      comment: "描述",
    },
  });
};
