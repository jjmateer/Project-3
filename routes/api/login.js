const router = require("express").Router();
const loginController = require("../../controllers/loginController");
const auth = require("../../middleware/auth")
router
    .route("/r")
    .post(loginController.register)

router
    .route("/l")
    .post(loginController.login)
module.exports = router;
