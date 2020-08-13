const Router = require("@koa/router");
const GuideController = require("../controllers/Guide");
const PoiController = require("../controllers/Poi");
const UserController = require("../controllers/User");
const RouteImageController = require("../controllers/RouteImage");
const RouteController = require("../controllers/Route");
const RoutePoiController = require("../controllers/RoutePoi");
const PoiImageController = require("../controllers/PoiImage");

const router = new Router();
router.prefix("/v1");

router.get("/user", UserController.get);
router.post("/guide", GuideController.post);
router.get("/guide", GuideController.get);
router.get("/type/guide", GuideController.getTypes);
router.get("/guide/:id", GuideController.getOne);
router.put("/guide/:id", GuideController.put);
router.delete("/guide/:id", GuideController.delete);
router.get("/route", RouteController.get);
router.post("/route", RouteController.post);
router.put("/route/:id", RouteController.put);
router.delete("/route/:id", RouteController.delete);
router.get("/route-poi", RoutePoiController.get);
router.post("/route-poi", RoutePoiController.post);
router.put("/route-poi/:id", RoutePoiController.put);
router.delete("/route-poi/:id", RoutePoiController.delete);
router.get("/poi", PoiController.get);
router.post("/poi", PoiController.post);
router.get("/poi/:id", PoiController.getOne);
router.get("/type/poi", PoiController.getTypes);
router.post("/route-img", RouteImageController.post);
router.post("/poi-img", PoiImageController.post);

module.exports = router;
