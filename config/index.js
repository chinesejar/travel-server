const database = require('./database.config');
const minio = require('./minio.config');

module.exports = {
  port: 3000,
  database,
  minio
}