const router = require('express').Router();

//Variable product que se conecta directamente con el modelo producto que está conectado con la
//base de datos
let Product = require('../models/product.model');


router.get('/get', async (req, res) => {
  await Product.find()
    .then(products => res.json(products)& 
    console.log("Productos entregados"))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', async (req, res) => {

  const productname = req.body.productname;
  const description = req.body.description;
  const price = Number(req.body.price);
  const productImage = req.body.images;

  const newProduct = new Product({
    productname,
    description,
    price,
    productImage,

    
  });

  await newProduct.save()
  .then(() => res.json('Product added!'))
  .catch(() => res.json('Cannot add, please write name, description and price'));
});



module.exports = router;