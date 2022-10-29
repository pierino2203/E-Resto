import {RequestHandler} from 'express'
import { isValidObjectId } from 'mongoose'
import Order from '../models/Order'
import User from '../models/User'
import mongoose from 'mongoose'
import Products from '../models/Products'
import { sendBuyEmail } from './mailController'
import Delivery from '../models/Delivery'
const ObjectId = mongoose.Types.ObjectId

export const getOrders: RequestHandler = async (req,res ) =>  {
  try {
    // const orders = await Order.find().populate('user_id',{
    //   _id: 1,
    //   name: 1,
    //   mail: 1
    // })
    const orders: any = await Order.aggregate([
      {
        $lookup:
        {
          from: "users",
          localField:"user_id",
          foreignField: "_id",
          as:"User__"
        }
      },
      {
        $lookup:
        {
          from:"products",
          let:{
            aliasNameProduct: "$products",
          },
          pipeline: [
            {
              $match: {
                $expr:  {
                  $in: ["$name","$$aliasNameProduct"]
                }
              }
            }
          ],
          as: "ListProducts"
        }
      },
      {
        $lookup:
        {
          from: "deliveries",
          localField:"delivery_id",
          foreignField: "_id",
          as:"Delivery__"
        }
      },
    ])
    
    res.status(200).json(orders)
  } catch (error) {
    console.log('Error en Get Orders')
  }
}
export const postOrders: RequestHandler = async (req,res)  =>  {
  try {
    const {user_id,date,payment,subtotal,paid,products,cantidad,total,propina,items} = req.body
    const user: any = await User.findById(user_id);
    console.log(user)
    const newOrder = new Order({
      user_id: user?._id,
      date: date,
      payment: payment,
      subtotal: subtotal,
      paid: paid,
      total: total,
      propina: propina,
      products: products,
      items: items,
      user: user    })

    const saveOrder: any = await newOrder.save();
    const id_order = saveOrder._id
    // console.log(saveOrder.id);
    cantidad.map(async (e:any)=> {
      // console.log(e)
      const pro: any = await Products.find({name: e.name})
      // console.log(pro)
      pro[0].stock= pro[0].stock - e.cant
      await pro[0].save();
    })
    user.orders= user.orders.concat(id_order);
    await user.save()
    sendBuyEmail(user.mail, saveOrder)
    res.status(200).json(saveOrder)
  } catch (error) {
    console.log('Error in post Order',error)
  }
}

export const getOrderById: RequestHandler = async (req,res)  =>  {
  try {
    const {id} = req.params
    if(isValidObjectId(id)){
      const order: any = await Order.aggregate([
        {
          $lookup:
          {
            from: "users",
            localField:"user_id",
            foreignField: "_id",
            as:"User__"
          }
        },
        {
          $lookup:
          {
            from:"products",
            let:{
              aliasNameProduct: "$products",
            },
            pipeline: [
              {
                $match: {
                  $expr:  {
                    $in: ["$name","$$aliasNameProduct"]
                  }
                }
              }
            ],
            as: "ListProducts"
          }
        },
        {
          $lookup:
          {
            from: "deliveries",
            localField:"delivery_id",
            foreignField: "_id",
            as:"Delivery__"
          }
        },{$match: {_id: new ObjectId(id)}},
      ])
      order
      ? res.send(order)
      : res.status(404).send('Order not found')
    }else{
      res.status(404).send('Order not found')
    }
  } catch (error) {
    console.log('Error in find Order By Id',error)
  }
  
}

export const deleteOrder: RequestHandler = async (req,res)  =>{
  try{
    const {id} = req.params
    if(isValidObjectId(id)){
      const order = await Order.findByIdAndDelete(id)
      order
      ? res.status(200).json({ msg: `Deleted User ${id}`})
      : res.status(404).send('Order not found')
    }else{
      res.status(404).send('Order not found')
    }
  }
  catch(error){
    console.log('Error in delete Order',error)
  }
}

export const editOrder: RequestHandler = async (req,res)  =>  {
  try {
    const {id}= req.params
    if(isValidObjectId(id)){
      const order = await Order.findByIdAndUpdate(id,req.body)
      order
      ? res.status(200).json(order)
      : res.status(404).send('Order not found')
    }else{
      res.status(404).send('Order not found')
    }
  } catch (error) {
    console.log('Error in Edit Order',error)
  }
}
export const addDelivery: RequestHandler =async (req,res) =>  {
  try {
    const {id} = req.params
    const {deli_id} = req.body
    if(isValidObjectId(id)){
      const order:any = await Order.findById(id)
      const deli :any = await Delivery.findById(deli_id)
      if(order){
        order.delivery_id= deli_id
        deli.orders= deli.orders.concat(id)
        deli.ocupado = true
        await deli.save()
        await order.save()
        res.status(200).json(order)
      }
      else{
        res.status(404).send("Order not found")
      }
    }else{
      res.status(404).send("Order not found")
    }
  } catch (error) {
    console.log("error in addDelivery",error)
  }
}

export const deliveredOrder: RequestHandler =async (req,res)  =>  {
  try {
    const {id} = req.params
    const {deli_id}=req.body
    if(isValidObjectId(id) || isValidObjectId(deli_id)){
      const order:any = await Order.findById(id)
      const deli :any = await Delivery.findById(deli_id)
      if(order || deli){
        order.delivered = true
        deli.ocupado =false
        await deli.save()
        await order.save()
        res.status(200).send("Orden entrega correctamente")
      }
      else{
        res.status(404).send("error in data")
      }
    }else{
      res.status(404).send("error in data")
    }
  } catch (error) {
    console.log('Error en Delivered Order',error)
  }
}