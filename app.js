const mongoose = require ('mongoose')
require('dotenv').config()
const Product = require('./models/products')


const dbName = 'prueba'
const password = 'Ronita16.'
const connectionUrl = `mongodb+srv://candeguinzburg:${password}@cluster0.kekidsj.mongodb.net/${dbName}`

mongoose.set('debug', true);


mongoose.connect(connectionUrl,
   {
    useNewUrlParser: true,
  
   } ).then(() =>{
    console.log('conexion exitosa')
   })
   .catch(err =>{
    console.error('No se pudo conextar a mongo atlas correctamente')
    console.error(err)
   })

   /* then y catch se usa cuando se hace una promesa, el then cuando se ejecuta, y el catch cuando no logra hacerlo y hay un error */

   /* crud = create, read update delete  */

   /*  lo que es objete en js en mongo es documentos */

    const createProduct = async (product) =>{
      try{
         const newProduct = new Product(product)
         await newProduct.save()
        console.log('producto guardado')
      }
      catch(error){
         throw error
      }
   }
/* const getAllproducts = async() =>{
   try{
      const products =await Product.find()
      console.log(products)
      return products
   }
   catch (error){
      throw error
   }
} */

/* const updateStockbyid= async (id, stock) =>{
   try{
      const  updatedProduct = await Product.findByIdAndUpdate(id, {stock}, {new: true})
   return updatedProduct
   }
   catch(error){
      throw error
   }
}
const deleteProductbyid = async (id) =>{
try{
   const deleteProduct= await Product.findByIdAndDelete(id)
   console.log('producto eliminado correctamente')
   console.log(deleteProduct)
}
catch(error){
   throw error
}
deleteProductbyid('')
updateStockbyid('940534756', 10)
getAllproducts() */



   createProduct ({
      nombre: 'tv samsung',
      precio: 3000,
      stock: 5,
      descripcion: 'buena tele'
         
      })
  