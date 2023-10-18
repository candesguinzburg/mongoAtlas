const mongoose = require('mongoose')
require('dotenv').config();

const dbName =  'prueba'
const password =  'Ronita16.' 
const connectionUrl = `mongodb+srv://candeguinzburg:${password}@cluster0.kekidsj.mongodb.net/${dbName}`

mongoose.connect(connectionUrl,
   {
    useNewUrlParser: true,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 45000, 
  
   } )

   const Product = mongoose.model('Product',{
    nombre: String,
    precio: Number,
    stock: Number,
    descripcion: String
   })

   module.exports = Product