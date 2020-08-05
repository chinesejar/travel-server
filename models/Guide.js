const { DataTypes } = require("sequelize")
const { guideStatus, guideTypes } = require("../utils/types")

module.exports = (sequelize) => {
  return sequelize.define('Guide', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "所属用户",
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
      type: DataTypes.ENUM(guideTypes),
      comment: "攻略类型",
    },
    status: {
      type: DataTypes.ENUM(guideStatus),
      defaultValue: guideStatus[0],
      comment: "状态",
    },
  })
}
