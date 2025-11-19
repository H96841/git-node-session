const basket = require("../Moudels/basket")


// const createBasket = async (req, res) => {
//   const create = async
//   const userId = req.user.id
//   if (!userId) {
//     return null
//   }
//   const user = await user.findById(userId).exec()
//   if (!user) {
//     return null
//   }
//   const newBasket = await basket.create({ user })
//   if (!newBasket) {
//     return null
//   }
//   return newBasket

// }


const addProductToBasket = async (req, res) => {
  const { prodectId } = req.body;
  try {
    //בודקים שיש את המוצר הזה
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    //שולפים את הסל של המשתמש לפי הטוקן
    let Basket = await basket.findOne({ user: req.user._id });
    if (Basket) {
      Basket.arrProdect.push({ product: productId });
    }
    else {
      // אין עגלה-יוצרים סל חדש
      Basket = new basket({
        user: req.user._id,
        arrProdect: [{ product: productId }],
      });
    }
    //שומרים את העגלה במסד נתונים
    const TheBasket = await Basket.save();
    //מחזירים את הסל המעודכן
    res.status(201).json(TheBasket);
  }
  catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Could not add item to cart', error: error.message });
  }
};


const deleteProduct = async (req, res) => {
  try {
    let product = await basket.findOne({ user: req.user._id });

    if (!product) {
      return res.status(404).json({ message: 'product not found' });
    }
    product.arrProdect = product.arrProdect.filter(item => item._id.toString() !== req.params.id);

    const updatedBasket = await product.save();
    res.json(updatedBasket);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


const getAllProductOnTheBasket = async (req, res) => {
  try {
    const product = await basket.findOne({ userId: req.user.id })
    if (!product)
      return res.json({ product: [] });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'error' });
  }
}

module.exports = { addProductToBasket, deleteProduct, getAllProductOnTheBasket }