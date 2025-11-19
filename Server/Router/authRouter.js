
const express = require("express")
const router = express.Router()
const authController = require("../controller/authController")

router.post("/login", authController.login)
router.post("/register", authController.register)
// router.put("/logout", authController.logOut, verifyJWT)

module.exports = router;
