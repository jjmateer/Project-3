const router = require("express").Router();
const inventoryController = require("../../controllers/inventoryController");

//   "/api/inventory"
router
  .route("/")
  .get(inventoryController.findAll)
  .post(inventoryController.create);

//  "/api/inventory/:id"
router
  .route("/:id")
  .get(inventoryController.findById)

//  "/api/inventory/:category"
router
  .route("/category/:category")
  .get(inventoryController.findByCategory);

router
  .route("/product-name/:name")
  .get(inventoryController.findByName);

router
  .route("/view-item/:item")
  .get(inventoryController.view);
module.exports = router;
