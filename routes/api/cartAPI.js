const router = require("express").Router();
const cartController = require("../../controllers/cartController");
const auth = require("../../middleware/auth");

router
  .route("/add-to-cart/:user/:item")
  .post(cartController.addToCart)

router
  .route("/user-cart/:user")
  .get(cartController.getUserCart);

router
  .route("/checkout/:user")
  .post(cartController.checkout);

module.exports = router;
