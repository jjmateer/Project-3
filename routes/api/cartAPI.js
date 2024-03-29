const router = require("express").Router();
const cartController = require("../../controllers/cartController");

router.route("/add-to-cart/:user/:item/:quantity").post(cartController.addToCart);

router.route("/user-cart/:user").get(cartController.getUserCart);

router.route("/user-cart/checkout/:user").post(cartController.checkout);

router
  .route("/checkout/:user")
  .post(cartController.checkout);

module.exports = router;
