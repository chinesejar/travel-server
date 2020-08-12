const Sequelize = require("sequelize");
const wkx = require("wkx");
const config = require("../config");

Sequelize.GEOMETRY.prototype._stringify = function _stringify(value, options) {
  return `ST_GeomFromText(${options.escape(
    wkx.Geometry.parseGeoJSON(value).toWkt()
  )})`;
};
Sequelize.GEOMETRY.prototype._bindParam = function _bindParam(value, options) {
  return `ST_GeomFromText(${options.bindParam(
    wkx.Geometry.parseGeoJSON(value).toWkt()
  )})`;
};
Sequelize.GEOGRAPHY.prototype._stringify = function _stringify(value, options) {
  return `ST_GeomFromText(${options.escape(
    wkx.Geometry.parseGeoJSON(value).toWkt()
  )})`;
};
Sequelize.GEOGRAPHY.prototype._bindParam = function _bindParam(value, options) {
  return `ST_GeomFromText(${options.bindParam(
    wkx.Geometry.parseGeoJSON(value).toWkt()
  )})`;
};

const { database } = config;

const sequelize = new Sequelize(database);

const User = require("./User")(sequelize);
const Guide = require("./Guide")(sequelize);
const Route = require("./Route")(sequelize);
const RoutePoi = require("./RoutePoi")(sequelize);
const RouteImage = require("./RouteImage")(sequelize);
const PoiImage = require("./PoiImage")(sequelize);
const Poi = require("./Poi")(sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log("连接建立成功。");
  })
  .catch((err) => {
    console.error("连接失败", err);
  });

sequelize.sync({ force: false, alter: true });

Guide.hasMany(Route, { foreignKey: "guide_id", as: "routes" });
Route.hasMany(RoutePoi, { foreignKey: "route_id", as: "pois" });
Route.hasMany(RouteImage, { foreignKey: "route_id", as: "images" });
RoutePoi.hasMany(PoiImage, { foreignKey: "route_poi_id", as: "images" });

module.exports = {
  sequelize,
  User,
  Guide,
  Route,
  Poi,
  RoutePoi,
  RouteImage,
  PoiImage,
};
