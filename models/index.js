const Sequelize = require('sequelize');
const config = require('../config/database.config');

// const sequelize = new Sequelize(config);
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'travel.sqlite',
});

const User = require('./User')(sequelize);
const Guide = require('./Guide')(sequelize);
const Route = require('./Route')(sequelize);
const RoutePoi = require('./RoutePoi')(sequelize);
const Poi = require('./Poi')(sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log("连接建立成功。")
  })
  .catch(err => {
    console.error("连接失败", err);
  })

sequelize.sync({ force: false });

module.exports = {
  sequelize, User, Guide, Route, Poi, RoutePoi
}
