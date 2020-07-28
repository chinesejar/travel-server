const validator = require('validator');

function createPoiValidator(data) {
  const { name, address, lat, lng } = data;
  if (!name) {
    return "缺少 name 字段";
  }
  if (!address) {
    return "缺少 address 字段";
  }
  if (!lat || !lng) {
    return "缺少经纬度字段";
  }
  if (!validator.isLatLong(`${lat}, ${lng}`)) {
    return "经纬度格式错误";
  }
}

module.exports = {
  createPoiValidator,
}