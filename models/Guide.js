const { DataTypes } = require("sequelize");
const { guideStatus } = require("../utils/types");

module.exports = (sequelize) => {
  return sequelize.define("Guide", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "所属用户",
    },
    title: {
      type: DataTypes.TEXT,
      comment: "攻略标题",
    },
    days: {
      type: DataTypes.INTEGER,
      comment: "行程天数",
    },
    description: {
      type: DataTypes.TEXT,
      comment: "攻略描述",
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      comment: "攻略评分",
    },
    type: {
      type: DataTypes.INTEGER,
      comment: "攻略类型",
    },
    status: {
      type: DataTypes.INTEGER,
      comment: "状态",
    },
  });
};
