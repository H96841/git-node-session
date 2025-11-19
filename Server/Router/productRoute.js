const express = require("express");
const router = express.Router();
const productcontroller = require("../controller/productcontroller");
const verifyJWT = require("../middleware/verifyJWT");
const verifyAdminJWT=require("../middleware/adminJWT")

router.get("/",productcontroller.GetAllProduct);
router.use(verifyJWT);
router.use(verifyAdminJWT);
router.post("/",productcontroller.AddProducts);
router.delete("/:id",productcontroller.deleteProductFromGalery);
router.put("/",productcontroller.updateProducts)

// ודא שהשיטה קיימת
// router.put("/logout", authController.logOut, verifyJWT)
module.exports = router;