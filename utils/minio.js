var Minio = require('minio');
const config = require('../config');

const { endPoint, port, accessKey, secretKey } = config.minio;

const minioClient = new Minio.Client({
  endPoint, port,
  useSSL: false,
  accessKey, secretKey
});

module.exports = minioClient;
