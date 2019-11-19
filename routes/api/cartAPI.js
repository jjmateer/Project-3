const router = require("express").Router();
const cartController = require("../../controllers/inventoryController");
const auth = require("../../middleware/auth");

router
  .route("/add-to-cart/:user/:item")
  .post(auth, cartController.addToCart)
  .put(auth, cartController.updateCart)
  .delete(auth, cartController.clearCart);

router.route("/add-to-cart/:user").get(auth, cartController.getCart);

module.exports = router;
