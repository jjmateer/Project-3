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
  .put(inventoryController.update)
  .delete(inventoryController.remove);

//  "/api/inventory/:category"
router
  .route("/category/:category")
  .get(inventoryController.findByCategory)

  router
  .route("/product-name/:name")
  .get(inventoryController.findByName)

router
  .route("/add-to-cart/:user/:item")
  .post(inventoryController.addToCart)

router
  .route("/user-cart/:user")
  .get(inventoryController.getUserCart)


module.exports = router;
