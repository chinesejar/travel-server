const Router = require('@koa/router');
const GuideController = require('../controllers/Guide');
const PoiController = require('../controllers/Poi');
const RouteImageController = require('../controllers/RouteImage');

const router = new Router;
router.prefix('/v1');

router.post('/guide', GuideController.post);
router.get('/guide', GuideController.get);
router.get('/type/guide', GuideController.getTypes);
router.get('/guide/:id', GuideController.getOne);
router.get('/poi', PoiController.get);
router.post('/poi', PoiController.post);
router.get('/poi/:id', PoiController.getOne);
router.get('/type/poi', PoiController.getTypes);
router.post('/route-img', RouteImageController.post);

module.exports = router;
