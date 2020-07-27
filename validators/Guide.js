const validator = require('validator');

function createGuideValidator(data) {
  const { days, score, type } = data;
  if (!days) {
    return "缺少 days 字段";
  }
  if (validator.isInt(score, { min: 0, max: 5 })) {
    return "score 字段格式错误";
  }
  if (validator.isInt(type, { min: 0, max: 5 })) {
    return "type 字段格式错误";
  }
}

module.exports = {
  createGuideValidator,
}