const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('Route', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    guide_id: { // 对应 guide 表
      type: DataTypes.UUID,
      allowNull: false,
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
      type: DataTypes.UUID,
      allowNull: false,
      comment: "起点poi"
    },
    end_poi: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "终点poi"
    },
    route: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "路线polyline"
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "备注"
    }
  })
}
