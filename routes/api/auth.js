const router = require("express").Router();
const authController = require("../../controllers/authController");
router.route("/register").post(authController.register);

router.route("/login").post(authController.login);

router.route("/user").post( authController.checkUser);
module.exports = router;
