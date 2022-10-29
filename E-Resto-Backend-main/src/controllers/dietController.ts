import {RequestHandler} from 'express'
import Diet from '../models/Diet'

export const getDiets: RequestHandler = async (req,res) =>  {
  try {
    const diets = await Diet.find();
    res.status(200).json(diets)
  } catch (error) {
    console.log('Error in get Diet',error)
  }
}
export const postDiets: RequestHandler = async (req,res) =>  {
  try {
    const{name} =req.body
    const find = await Diet.findOne({name: name})
    if(find === null){
      if(!name){
        res.send('Please insert data required')
      }
      else{
        const diet = new Diet({
          name: name
        })
        const saveDiet = await diet.save();
        res.status(200).json(saveDiet)
      }
    }else{
      res.send('Diet already exist')
    }
  } catch (error) {
    console.log('Error in post Diet',error)
  }
}  
