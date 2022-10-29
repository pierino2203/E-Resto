import { RequestHandler } from "express";
import Newsletter from "../models/Newsletter";

export const getMailsNewsLetter: RequestHandler = async (req,res)   =>{
  try {
    const mails = await Newsletter.find()
  if(mails.length>0){
    res.status(200).json(mails)
  }else{
    res.status(404).send("There are no emails in newsLetter")
  }
  } catch (error) {
    console.log('Error in NewsLetter',error)
  }
}

export const addMailNewsLetter: RequestHandler = async(req,res) =>  {
  try {
    const {mail} = req.body
    if(mail){
      const find = await Newsletter.find({mail: mail})
    if(find.length>0){
      res.status(404).send("El mail ingresado ya esta suscripto")
    }else{
      const newMail = new Newsletter(req.body)
      const mailSave = await newMail.save()
      res.status(200).send(`Mail: ${mail}, added to NewsLetter `)
    }
    }else{
      res.status(404).send('Mail is required')
    }
  } catch (error) {
    console.log('Error in add Mail NewsLetter',error)
  }
}
export const deleteMailNewsLetter: RequestHandler = async(req,res)  =>  {
  try {
    const {mail}=req.body
    const mailFind: any = await Newsletter.find({mail: mail})
    if(mailFind.length>0){
      const deleteEmail = await Newsletter.deleteOne({mail: mail})
      res.status(200).send(`Mail: ${mail} deleted from NewsLetter`)
    }else{
      res.status(404).send("Mail not found in NewsLetter")
    }
  } catch (error) {
    console.log('Error in delete NewsLetter',error)
  }
}