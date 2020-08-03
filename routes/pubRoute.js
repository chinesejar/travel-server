const Router = require('@koa/router');
const UserController = require('../controllers/User');

const router = new Router;

router.post('/auth/login', UserController.login);
router.post('/auth/register', UserController.register);

module.exports = router;
