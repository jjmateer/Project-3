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

module.exports = router;
