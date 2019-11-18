const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// const auth = require("../middleware/auth")

// API Routes
router.use("/api", apiRoutes);

module.exports = router;
