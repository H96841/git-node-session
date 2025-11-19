// const { json } = require("express")
const Product = require("../Moudels/Product")

//אפשרות של משתמש לראות את כול התמונות שמכילה הגלריה
//בעת לחיצה על גלריה
const GetAllProduct= async (req, res) => {
    try {
        const products = await Product.find().lean();
        if (!products.length) {
            return res.status(404).send("No products found");
        }
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
    res.status(404).send("No products found");
};

const AddProducts=async(req,res)=>{
    const {name,img}=req.body
    console.log(name,img);
    if(!name||!img){
        res.status(404).send("not found")
    }
    else{
        const products={name,img}
        // console.log(products);
        await Product.create(products)
        // products.save()
        res.send("sucsess")
    }
}

// const deleteProductFromGalery = async (req, res) => {
//     try {
//       let product = await Product.findOne({ Product: req.Product._id });
//       if (!product) {
//         return res.status(404).json({ message: 'product not found' });
//       }
//       product.arrProdect = product.arrProdect.filter(item => item._id.toString() !== req.params.id);
  
//       const updatedBasket = await product.save();
//       res.json(updatedBasket);

//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server Error' });
//     }
//   };


  const deleteProductFromGalery=async(req,res)=>{
    const {id}=req.params
    const product =await Product.findById(id).exec()
    if(!product)
        res.status(404).send("not found")
    else{
     const result= await product.deleteOne()
     const reply= `product'${result.name}' deleted`
     res.json(reply)
    }
}

const updateProducts=async(req,res)=>{
    const {id,name,img}=req.body
    if(!id){
        return res.status(400).send("error")
    }
    const product = await Product.findById(id)
    if(!product){
        return res.status(400).send("error")
    }

    if(name)
    product.name = name
    if(img)
        product.img =img

    const updateProducts = await product.save()
    res.json(`'${updateProducts.name}' updated`)
}

module.exports  = {GetAllProduct,AddProducts,deleteProductFromGalery,updateProducts}