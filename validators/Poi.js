const validator = require('validator');
const { poiTypes } = require('../utils/types');

function createPoiValidator(data) {
  const { name, type, address, lat, lng } = data;
  if (!validator.isIn(type, poiTypes)) return "type 格式错误";
  if (name === undefined) return "缺少 name 字段";
  if (address === undefined) return "缺少 address 字段";
  if (typeof (address) !== 'string') return "address 格式错误";
  if (lat === undefined || lng === undefined) return "缺少经纬度字段";
  if (!validator.isLatLong(`${lat}, ${lng}`)) return "经纬度格式错误";
}

module.exports = {
  createPoiValidator,
}