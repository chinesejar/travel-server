const Router = require('@koa/router');
const UserController = require('../controllers/User');
const GuideController = require('../controllers/Guide');
const PoiController = require('../controllers/Poi');

const router = new Router;
router.prefix('/v1');

router.get('/user/register', UserController.register);
router.get('/guide', GuideController.get);
router.get('/guide/:id', GuideController.getOne);
router.get('/poi', PoiController.get);
router.post('/poi', PoiController.post);
router.get('/poi/:id', PoiController.getOne);

module.exports = router;
