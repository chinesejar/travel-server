const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const router = require('./routes/route');
const config = require('./config');

const app = new Koa();

app.use(cors({
  credentials: true,
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(logger());
app.use(bodyParser());
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
