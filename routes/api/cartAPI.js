const router = require("express").Router();
const cartController = require("../../controllers/inventoryController");
const auth = require("../../middleware/auth");

router
  .route("/add-to-cart/:user/:item")
  .post(cartController.addToCart)

router
  .route("/user-cart/:user")
  .get(cartController.getUserCart);

module.exports = router;
