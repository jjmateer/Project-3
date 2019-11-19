const router = require("express").Router();
const inventoryRoutes = require("./inventory");
const cartRoutes = require("../api/cartAPI");
const loginRoutes = require("./login")

// inventory routes
router.use("/cart", cartRoutes)
router.use("/inventory", inventoryRoutes);
router.use("/login", loginRoutes);


module.exports = router;
