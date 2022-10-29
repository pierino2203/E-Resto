import {RequestHandler} from 'express'
import { isValidObjectId } from 'mongoose';
import Delivery from '../models/Delivery'
import { sendWelcomeRepartidor } from './mailController';
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');

export const getDelivery: RequestHandler =async(req,res)  =>  {
  try {
    const delivery = await Delivery.aggregate([
      {
        $lookup:
        {
          from: "orders",
          let:
          {
            aliasOrder: "$orders"
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ["$_id","$$aliasOrder"]
                }
              }
            }
          ],
          as: "orderList"
        }
      },
    ]);
    res.status(200).json(delivery)
  } catch (error) {
    console.log('Error in Get Delivery',error)
  }
}

export const registerDelivery: RequestHandler = async (req,res) =>  {
  try {
    const {name, lastName,mail,password} = req.body
    if(!name || !lastName || !mail || !password){
      return res.status(404).send('Ingresar Datos requeridos')
    }
    const find = await Delivery.find({mail: mail})
    if(find.length>0){
      return res.status(404).send("Email already exist")
    }
    const delivery: any = new Delivery(req.body);
    delivery.password = await delivery.encryptPassword(delivery.password)
    await delivery.save()
    const token = await jwt.sign({id: delivery._id}, process.env.SECRET_KEY,{
      expiresIn: process.env.JWT_EXPIRE,
    })
    sendWelcomeRepartidor(mail, password)
    res.status(200).json({auth: true,token})
  } catch (error) {
    console.log('Error in Registe Delivery',error)
  }
}

export const deliveryLogin: RequestHandler = async (req,res)  =>  {
  try {
    const {mail,password} = req.body
    if(!mail || !password){
      return res.status(404).send('Enter all data required')
    }
    const find: any = await Delivery.find({mail: mail})
    if(find.length===0){
      return res.status(404).send("Email not found")
    }
    const comparePassword =await find[0].validatePassword(password)
    if(!comparePassword){
      return res.status(404).send('Wrong credentials pass');
    }
    const token = await jwt.sign({id: find[0]._id}, process.env.SECRET_KEY,{
      expiresIn: process.env.JWT_EXPIRE,
    })
    res.status(200).json({auth: true,token})
      
  } catch (error) {
    console.log('Error in Delivery Login',error)
  }
  
}
export const findDeliveryById: RequestHandler = async (req,res) => {
  try {
    const {id}= req.params
    if(isValidObjectId(id)){
      const find = await Delivery.findById(id)
      if(!find){
        return res.status(404).send('Delivery not found')
      }
      else{
        return res.status(200).json(find)
      }
    }else{
      return res.status(404).send('Delivery not found')
    }
  } catch (error) {
    console.log('Error in get By Id Delivery',error)
  }
}
export const editDelivery: RequestHandler = async (req,res) => {
  try {
    const {id}= req.params
    if(isValidObjectId(id)){
      if(req.body.password){
        const salt =await bcrypt.genSalt(10)
        const passHash = await bcrypt.hash(req.body.password,salt)
        console.log(req.body.password);
        req.body.password = passHash
      }
      const delivery = await Delivery.findByIdAndUpdate(id,req.body)
      delivery
      ? res.status(200).json(delivery)
      : res.status(404).send('Delivery not found')
    }else{
      res.status(404).send('Delivery not found')
    }
  } catch (error) {
    console.log('Error in get By Id Delivery',error)
  }
}
export const deleteDelivery: RequestHandler = async (req,res) =>  {
  try{
    const {id} = req.params
    if(isValidObjectId(id)){
      const delivery = await Delivery.findByIdAndDelete(id)
      delivery
      ? res.status(200).json({ msg: `Deleted delivery ${id}`})
      : res.status(404).send('delivery not found')
    }else{
      res.status(404).send('delivery not found')
    }
  }
  catch(error){
    console.log('Error in delete delivery',error)
  }
}
export const deliveryToken: RequestHandler= async(req: any,res)=>  {
  try {
    const delivery =await Delivery.findById(req.deliveryId, {password: 0}).populate('orders',{
      delivery_id: 0,
      createdAt: 0,
      updatedAt: 0
    })
    console.log(delivery)
  if(!delivery){
    return res.status(404).send('Delivery not founds')
  }
  res.json(delivery)
  } catch (error) {
    console.log('Error in Token ',error)
  }
}

