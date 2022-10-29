import mongoose from 'mongoose'
import dotenv from 'dotenv'
// import categories from './jsonData/categories'
import productos from './jsonData/products'
import Products from './models/Products'
import Category from './models/Category'
import categories from './jsonData/categories'
dotenv.config()

const URI = process.env.URI || "error" 
void (async () => {
  try {
    const db = await mongoose.connect(URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    })
    console.log('DB is connect to: ', db.connection.name)
    const find = await Products.find();
    if(find.length !== 0) {
      console.log('products already in DB')
    } else {
      Products.insertMany(productos)
      Category.insertMany(categories)
      .then(val => {console.log('products in DB')})
      .catch(err => {console.log(err)})
    }


  } catch (error) {
    console.log('Error in connect DB', error)
  }
})()

