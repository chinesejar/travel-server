const Koa = require('koa');
const cors = require('@koa/cors');
var jwt = require('koa-jwt');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const router = require('./routes/route');
const pubRoute = require('./routes/pubRoute');
const minioClient = require('./utils/minio');
const config = require('./config');

const app = new Koa();
app.context.minio = minioClient;

app.use(cors({
  credentials: true,
  allowHeaders: ['Content-Type', 'X-Requested-With', 'Authorization', 'Accept'],
}));

app.use(jwt({ secret: 'abcdpoqwerlkjhgsdfbcvnxcvmnh' }).unless({ path: [/^\/auth/] }));

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

app.use(pubRoute.routes());
app.use(pubRoute.allowedMethods());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.port);
