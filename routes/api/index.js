const router = require("express").Router();
const inventoryRoutes = require("./inventory");
const cartRoutes = require("./cartAPI");
const authRoutes = require("./auth")

// inventory routes
router.use("/cart", cartRoutes)
router.use("/inventory", inventoryRoutes);
router.use("/auth", authRoutes);


module.exports = router;
