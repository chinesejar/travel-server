const validator = require('validator');

function registerUserValidator(data) {
  let { username, password, gender = 0 } = data;
  if (username === undefined) return "缺少用户名";
  if (typeof (username) !== 'string') return "用户名格式错误";
  if (username.length < 6 || username.length > 30) return "用户名长度不符合要求";
  if (password === undefined) return "缺少密码";
  if (typeof (password) !== 'string') return "密码格式错误";
  if (!(typeof (gender) === 'number' && gender >= 0 && gender <= 2)) return "性别格式不符合要求";
}

function authUserValidator(data) {
  const { username, password } = data;
  if (username === undefined) return "缺少用户名";
  if (typeof (username) !== 'string') return "用户名格式错误";
  if (username.length < 6 || username.length > 30) return "用户名长度不符合要求";
  if (password === undefined) return "缺少密码";
}

module.exports = {
  registerUserValidator,
  authUserValidator,
}