import { RequestHandler, Request } from 'express'
import mongoose, { isValidObjectId } from 'mongoose'
import Category from '../models/Category'
import Diet from '../models/Diet'
import Product from '../models/Products'
import { product } from './Interfaces/Interfaces'
const ObjectId = mongoose.Types.ObjectId

type ReqDictionary = {}
type ReqBody = { foo1 ?: string }
type ResBody = { foo3 ?: string }
type ReqQuery = { name ?: string }
type SomeHandlerRequest = Request<ReqDictionary, ResBody, ReqBody, ReqQuery>

export const getProduct: RequestHandler = async (req:SomeHandlerRequest,res) =>  {
  try {

    const {name} = req.query;
      const resultado:Array<product> = await Product.aggregate([
        {
          $lookup:
            {
              from: "categories",
              localField: "category",
              foreignField: "name",
              as: "categoryProducts"
            }
          
        },{ $unwind: "$categoryProducts"},
        {
          $lookup:
          {
            from: "reviews",
            let:
            {
              aliasReviewProduct: "$review_product"
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $in: ["$_id","$$aliasReviewProduct"]
                  }
                }
              }
            ],
            as: "reviewProductList"
          }
        }  
      ])
      if(!name){
        res.status(200).json(resultado)
      }else{
        const find = resultado.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()) )
        if(find.length>0){
          res.json(find)
        }
        else{
          res.status(404).send('not found')
        }
      }
  } catch (error) {
    console.log('Error in get Products',error)
  }
}
  

export const getProductById: RequestHandler = async (req,res) =>  {
  try {
    const {id} = req.params
    if(isValidObjectId(id)){
      const resultado:Array<product>= await Product.aggregate([
        {
          $lookup:
            {
              from: "categories",
              localField: "category",
              foreignField: "name",
              as: "categoryProducts"
            }
          
        },{ $unwind: "$categoryProducts"},
        {
          $lookup:
          {
            from: "reviews",
            let:
            {
              aliasReview: "$review_product"
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $in: ["$_id","$$aliasReview"]
                  }
                }
              }
            ],
            as: "reviewList"
          }
        },{$match: {_id: new ObjectId(id)}}, 
      ])
      if(resultado.length>0){
        res.status(200).json(resultado)
      }else{
        res.status(404).send(`Product ${id} not found`)
      }
    }else{
      res.status(404).send(`Product ${req.params.id} not found`)
    }
  } catch (error) {
    console.log('Error in Find Product By id',error)
  }
}


export const postProduct: RequestHandler = async (req,res)  =>{
  try {
    const {name,description,price,stock,rating,off,combo,img,category,diet} = req.body
    // const cat = await Category.findById(category)
    // const die = await Diet.findById(diet)
    const find = await Product.findOne({name: name})
    if(find){res.send('This Produc already exist')}
    const product = new Product({
      name: name,
      description: description,
      price: price,
      stock: stock,
      rating: rating,
      off: off,
      img: img,
      category: category,
      // diet: diet
    })
    const saveProduct = await product.save();
    res.status(200).json(saveProduct);
  } catch (error) {
    console.log('Error in Post Product',error)
  }
}

export const editProduct: RequestHandler  =async(req,res) =>{
  try {
    if(isValidObjectId(req.params.id)){
      const edit = await Product.findByIdAndUpdate(req.params.id,req.body)
      edit
      ? res.json(edit)
      : res.status(404).send(`Product id:${req.params.id} not found`)
    }else{
      res.status(404).send(`Product id:${req.params.id} not found`)
    }
  } catch (error) {
    console.log('Error in Edit Product',error)  
  }
}

export const deleteProduct: RequestHandler  =async(req,res) =>{
  try {
    if(isValidObjectId(req.params.id)){
      const dele = await Product.findByIdAndDelete(req.params.id,req.body)
      dele
      ? res.json(dele)
      :res.status(404).send(`Product id:${req.params.id} not found`)
    }else{
      res.status(404).send(`Product id:${req.params.id} not found`)
    }
  } catch (error) {
    console.log('Error in Delete Product',error)  
  }
}
