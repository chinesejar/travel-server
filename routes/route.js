const Router = require('@koa/router');
const UserController = require('../controllers/User');
const GuideController = require('../controllers/Guide');

const router = new Router;
router.prefix('/v1');

router.get('/user/register', UserController.register);
router.get('/guide', GuideController.get);
router.get('/guide/:id', GuideController.getOne);

module.exports = router;
