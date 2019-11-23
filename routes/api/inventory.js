const router = require("express").Router();
const inventoryController = require("../../controllers/inventoryController");
const auth = require("../../middleware/auth");

//   "/api/inventory"
router
  .route("/")
  .get(inventoryController.findAll)
  .post(inventoryController.create);

//  "/api/inventory/:id"
router
  .route("/:id")
  .get(inventoryController.findById)
  .put(inventoryController.update)
  .delete(inventoryController.remove);

//  "/api/inventory/:category"
router.route("/category/:category").get(inventoryController.findByCategory);

router.route("/product-name/:name").get(inventoryController.findByName);

module.exports = router;
