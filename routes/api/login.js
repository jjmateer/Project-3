const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router
    .route("/r")
    .post(loginController.register)

router
    .route("/l")
// .post(loginController.login)


module.exports = router;
