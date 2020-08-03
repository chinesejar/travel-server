const validator = require('validator');

function uploadImageValidator(data) {
  const { days, score, type, routes } = data;
  if (!days) return "缺少 days 字段";
  if (!validator.isInt(days, { min: 1 })) return "days 字段格式错误";
  if (!validator.isInt(score, { min: 0, max: 5 })) return "score 字段格式错误";
  if (!validator.isInt(type, { min: 0, max: 5 })) return "type 字段格式错误";
  if (!validator.isArray(routes)) return "routes 字段格式错误";
  for (const { title, day, start_poi, end_poi, description, pois } of routes) {
    if (!validator.isInt(day, { min: 1 })) return "day 字段格式错误";
    if (!validator.isInt(end_poi, { min: 1 })) return "start_poi 字段格式错误";
    if (!validator.isInt(end_poi, { min: 1 })) return "end_poi 字段格式错误";
    if (!validator.isArray(pois)) return "routes 字段格式错误";
    for (const { type, description, poi } of pois) {
      if (!validator.isInt(type, { min: 0 })) return "type 字段格式错误";
      if (!validator.isInt(poi, { min: 1 })) return "poi 字段格式错误";
    }
  }
}

module.exports = {
  uploadImageValidator,
}