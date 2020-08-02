const Koa = require('koa');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const router = require('./routes/route');
const minioClient = require('./utils/minio');
const config = require('./config');

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
    ctx.body = { msg: err.message };
    ctx.app.emit('error', err, ctx);
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.port);
