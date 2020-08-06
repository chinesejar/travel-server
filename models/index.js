const Sequelize = require('sequelize');
const config = require('../config');

const { database } = config;

const sequelize = new Sequelize(database);

const User = require('./User')(sequelize);
const Guide = require('./Guide')(sequelize);
const Route = require('./Route')(sequelize);
const RoutePoi = require('./RoutePoi')(sequelize);
const RouteImage = require('./RouteImage')(sequelize);
const PoiImage = require('./PoiImage')(sequelize);
const Poi = require('./Poi')(sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log("连接建立成功。")
  })
  .catch(err => {
    console.error("连接失败", err);
  })

sequelize.sync({ force: false, alter: true });

Guide.hasMany(Route, { foreignKey: 'guide_id' });
Route.hasMany(Poi, { foreignKey: 'route_id' });

module.exports = {
  sequelize, User, Guide,
  Route, Poi, RoutePoi,
  RouteImage, PoiImage
}
