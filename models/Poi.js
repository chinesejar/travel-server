const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('Poi', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      comment: "点名称"
    },
    type: { // 点类型 0 未定义/其他 1 景点 2 餐饮 3 住宿 4 娱乐
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "点类型"
    },
    catalog: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "点种类"
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "地址",
    },
    contact_person: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "联系人"
    },
    contact_telephone: {
      type: DataTypes.STRING(11),
      allowNull: true,
      comment: "联系电话"
    },
    contact_phone: {
      type: DataTypes.STRING(11),
      allowNull: true,
      comment: "联系手机"
    },
    province: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "省份"
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "城市"
    },
    district: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "区县"
    },
    village: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "村镇"
    },
    district_code: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "区县"
    },
    village_code: {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "村镇"
    },
    geometry: {
      type: DataTypes.GEOMETRY("POINT"),
      comment: "坐标"
    },
    elevation: {
      type: DataTypes.DOUBLE,
      comment: "海拔"
    },
    grade_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "等级ID"
    },
    grade_title: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "等级"
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "评分"
    },
    source: {
      type: DataTypes.STRING(10),
      comment: "来源"
    },
    status: { // 状态 0 - 正常 1 - 暂时无效 2 - 回收站
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "状态"
    },
  })
}
