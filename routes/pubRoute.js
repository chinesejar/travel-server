const Router = require('@koa/router');
const AuthController = require('../controllers/Auth');

const router = new Router;

router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

module.exports = router;
