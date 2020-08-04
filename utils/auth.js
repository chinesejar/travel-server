const jwt = require('jsonwebtoken');
const AUTHORIZATION = 'Authorization';
const expiresIn = 3600;
const tokenName = 'token';
const secret = "abcdpoqwerlkjhgsdfbcvnxcvmnh";

const auth = {
  sign: (ctx, info) => {
    const token = jwt.sign(info, secret, { expiresIn });
    ctx.set(AUTHORIZATION, `Bearer ${token}`);
    ctx.cookies.set(tokenName, token, {
      maxAge: expiresIn,
      httpOnly: true,
    });
    return token;
  },
  verify: (token) => {
    try {
      const payload = jwt.verify(token, secret);
      return payload;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = auth;
