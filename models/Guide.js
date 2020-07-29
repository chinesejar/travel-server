const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('Guide', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "行程天数",
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "攻略描述",
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "攻略评分",
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "攻略方案",
    },
    type: { // 攻略类型 0 - 生态休闲 1 - 文化古迹 2 - 宗教朝圣
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "攻略类型",
    },
    status: { // 状态 0 - 正常 1 - 暂时无效 2 - 回收站
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "状态",
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "备注",
    }
  })
}
