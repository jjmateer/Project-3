const router = require("express").Router();
const authController = require("../../controllers/authController");
router.route("/register").post(authController.register);

router.route("/login").post(authController.login);

router.route("/user").post( authController.checkUser);

router.route("/:type/:id").post(authController.updateCredentials)
module.exports = router;
