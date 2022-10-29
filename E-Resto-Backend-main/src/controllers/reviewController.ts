import { RequestHandler } from "express";
import { isValidObjectId } from "mongoose";
import Review from "../models/Review";
import mongoose from 'mongoose'
import User from "../models/User";
import Products from "../models/Products";
const ObjectId = mongoose.Types.ObjectId

export const getReviews: RequestHandler= async (req,res)   =>  {
  try {
    const reviews = await Review.aggregate([
      {
        $lookup:
        {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "User"
        }
      },
      {
        $lookup:
        {
          from: "products",
          localField: "product_id",
          foreignField: "_id",
          as: "Product"
        }
      }
    ])
    return res.status(200).json(reviews);
  } catch (error) {
    console.log('Error in Reviews',error)
  }
}

export const getReviewById: RequestHandler = async (req,res)  =>  {
  try {
    const {id}  = req.params
    if(isValidObjectId(id)){
      
      const reviews = await Review.aggregate([
        {
          $lookup:
          {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "User"
          }
        },
        {
          $lookup:
          {
            from: "products",
            localField: "product_id",
            foreignField: "_id",
            as: "Product"
          }
        },{$match: {_id: new ObjectId(id)}},
      ])
      if(reviews.length>0){
        return res.status(200).json(reviews)
      }else{
        res.status(404).send('Review not found')
      }
    }
    else{
      res.status(404).send('Review not found')
    }
  } catch (error) {
    console.log('Error in find By Id Review',error)
  }
}
export const postReview : RequestHandler = async (req,res)  =>  {
  try {
    const {user_id,product_id,rating,comment} =req.body
    const user: any = await User.findById(user_id)
    const product: any = await Products.findById(product_id)
    const review = new Review(req.body)
    const saveReview = await review.save()
    const id_review = saveReview._id
    user.reviews_user = user.reviews_user.concat(id_review)
    product.review_product= product.review_product.concat(id_review)
    if(product.review_product.length>1){
      product.rating= product.rating*(product.review_product.length)
      product.rating = (product.rating+rating)/(product.review_product.length+1)
    }else{
      product.rating = (product.rating+rating)/2;
    }
    await user.save()
    await product.save()
    res.status(200).json(saveReview)
  } catch (error) {
    console.log('Error in post Review',error)
  }
}
export const editReview: RequestHandler = async(req,res)  =>  {
  try {
    const {id}= req.params
    if(isValidObjectId(id)){
      const edit = await Review.findByIdAndUpdate(id,req.body);
      if(edit){
        res.status(200).json(edit)
      }else{
        res.status(404).send('Review not found')
      }
    }
    else{
      res.status(404).send('Review not found')
    }  
  } catch (error) {
    console.log("Error un Edit Review",error)
  }
}
export const deleteReview: RequestHandler = async(req,res)  =>  {
  try {
    const {id}= req.params
    if(isValidObjectId(id)){
      const review = await Review.findById(id)
      if(review){
        const id_product: any = await Products.findById(review.product_id)
        const id_user: any = await User.findById(review.user_id)
        id_product.review_product = id_product.review_product.filter((e: any) => e!=id )
        id_user.reviews_user = id_user.reviews_user.filter((e:any)=> e!=id)
        console.log(id_product.review_product)
        console.log(id_user.reviews_user)
        await id_product.save();
        await id_user.save();
        await Review.findByIdAndDelete(id);
        res.send('Review Deleted')
      }else{
        res.status(404).send('Review not found')
      }
    }
    else{
      res.status(404).send('Review not found')
    } 
  } catch (error) {
    console.log('Error en delete Review',error)
  }
}