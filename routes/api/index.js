const router = require("express").Router();
const inventoryRoutes = require("./inventory");
const loginRoutes = require("./login")

// inventory routes
router.use("/inventory", inventoryRoutes);
router.use("/login", loginRoutes);

module.exports = router;
