const express =require("express")
const router = express.Router()
const basketController=require("../controller/basketController")
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);
router.post("/",basketController.addProductToBasket)
router.delete("/",basketController.deleteProduct)
router.get("/",basketController.getAllProductOnTheBasket)


// router.put("/",basketController.addProductToBasket)

module.exports=router;