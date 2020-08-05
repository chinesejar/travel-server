const validator = require('validator');
const { guideTypes, poiTypes } = require('../utils/types');

function createGuideValidator(data) {
  const { days, description, type, routes } = data;
  if (!days) return "缺少 days 字段";
  if (typeof (description) !== 'string') return "description 字段格式错误";
  if (!validator.isInt(days, { min: 1 })) return "days 字段格式错误";
  if (!validator.isInt(type, { min: 0, max: guideTypes.length - 1 })) return "type 字段格式错误";
  if (!validator.isArray(routes)) return "routes 字段格式错误";
  for (const { title, day, start_poi, end_poi, description, pois } of routes) {
    if (!validator.isInt(day, { min: 1 })) return "day 字段格式错误";
    if (typeof (title) !== 'string') return "title 字段格式错误";
    if (typeof (description) !== 'string') return "routes 里的 description 字段格式错误";
    if (!validator.isInt(start_poi, { min: 1 })) return "start_poi 字段格式错误";
    if (!validator.isInt(end_poi, { min: 1 })) return "end_poi 字段格式错误";
    if (!validator.isArray(pois)) return "routes 字段格式错误";
    for (const { type, description, poi } of pois) {
      if (typeof (description) !== 'string') return "routes 里的 pois 里的 description 字段格式错误";
      if (!validator.isInt(type, { min: 0, max: poiTypes.length - 1 })) return "type 字段格式错误";
      if (!validator.isInt(poi, { min: 1 })) return "poi 字段格式错误";
    }
  }
}

module.exports = {
  createGuideValidator,
}