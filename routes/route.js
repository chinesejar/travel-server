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

// user
router.get("/user", UserController.get);
// guide
router.post("/guide", GuideController.post);
router.get("/guide", GuideController.get);
router.get("/guide/:id", GuideController.getOne);
router.put("/guide/:id", GuideController.put);
router.delete("/guide/:id", GuideController.delete);
// route
router.get("/route", RouteController.get);
router.post("/route", RouteController.post);
router.put("/route/:id", RouteController.put);
router.delete("/route/:id", RouteController.delete);
// route-poi
router.get("/route-poi", RoutePoiController.get);
router.post("/route-poi", RoutePoiController.post);
router.put("/route-poi/:id", RoutePoiController.put);
router.delete("/route-poi/:id", RoutePoiController.delete);
// poi
router.get("/poi", PoiController.get);
router.post("/poi", PoiController.post);
router.get("/poi/:id", PoiController.getOne);
// type
router.get("/type/guide", GuideController.getTypes);
router.get("/type/poi", PoiController.getTypes);
// route-image
router.post("/route-image", RouteImageController.post);
router.delete("/route-image", RouteImageController.delete);
// poi-image
router.post("/poi-image", PoiImageController.post);
router.delete("/poi-image", PoiImageController.delete);

module.exports = router;
