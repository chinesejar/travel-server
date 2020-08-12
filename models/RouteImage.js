const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("RouteImage", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    route_id: {
      // 对应 route 表
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "所属路线",
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "所属用户",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "图片名称",
    },
  });
};
