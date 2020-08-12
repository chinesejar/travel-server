const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("PoiImage", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    route_poi_id: {
      // 对应 route_poi 表
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      // 对应 poi 表
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "图片名称",
    },
  });
};
