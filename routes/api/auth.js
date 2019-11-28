const router = require("express").Router();
const loginController = require("../../controllers/loginController");
router.route("/register").post(loginController.register);

router.route("/login").post(loginController.login);

router.route("/user").post( loginController.checkUser);
module.exports = router;
