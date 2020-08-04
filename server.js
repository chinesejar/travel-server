const Koa = require('koa');
const cors = require('@koa/cors');
var jwt = require('koa-jwt');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const router = require('./routes/route');
const pubRoute = require('./routes/pubRoute');
const minioClient = require('./utils/minio');
const config = require('./config');
const auth = require('./utils/auth');

const app = new Koa();
app.context.minio = minioClient;

app.use(cors({
  credentials: true,
  allowHeaders: ['Content-Type', 'X-Requested-With', 'Authorization', 'Accept'],
}));

app.use(logger());
app.use(koaBody({ multipart: true }));
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { message: err.message };
    ctx.app.emit('error', err, ctx);
  }
});

app.use(pubRoute.routes(), pubRoute.allowedMethods());

app.use(async (ctx, next) => {
  const { authorization } = ctx.header;
  const token = authorization.split(' ')[1];
  const user = auth.verify(token);
  if (user) {
    ctx.state = Object.assign(ctx.state, user);
    await next();
  } else ctx.throw(401, "token 验证错误")
})

app.use(jwt({ secret: 'abcdpoqwerlkjhgsdfbcvnxcvmnh' }));

app.use(router.routes(), router.allowedMethods());

app.listen(config.port);
