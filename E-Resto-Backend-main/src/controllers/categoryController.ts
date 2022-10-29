import {RequestHandler} from 'express'
import { isValidObjectId } from 'mongoose'
import Category from '../models/Category'

export const getCategory: RequestHandler = async (req,res)  =>  {
  try {
    // const category = await Category.find()
    // res.status(200).json(category)
    const resultado = await Category.aggregate([
      {
        $lookup:
          {
            from: "products",
            localField: "name",
            foreignField: "category",
            as: "categoryProducts"
          }
        
      }
    ])
   res.status(200).json(resultado)
  } catch (error) {
    console.log('Error in get Category',error);
  }
}

export const postCategory: RequestHandler = async (req,res) =>  {
  try {
    const{name} =req.body
    const find = await Category.findOne({name: name})
    if(find === null){
      if(!name){
        return res.status(404).send('Please insert data required')
      }
      else{
        const category = new Category({
          name: name
        })
        const saveCategory = await category.save();
        res.status(200).json(saveCategory)
      }
    }else{
      res.status(404).send('Category already exist')
    }
  } catch (error) {
    console.log('Error in post Category',error)
  }
}

