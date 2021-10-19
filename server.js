const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
console.log (process.env.ATLAS_URI)
console.log (process.env.PORT) 
//Conexión con la base de datos
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//Uso de los routes para poder hacer requests y recibir responses
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});