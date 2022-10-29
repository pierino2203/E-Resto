import {Schema,model} from 'mongoose'
const bcrypt= require('bcryptjs')

const deliverySchema = new Schema({
  name:{
    type: String,
    require: true,
  },
  lastName:{
    type: String,
    require: true
  },
  mail:{
    type: String,
    require: true
  },
  password:{
    type: String,
    require: true
  },
  ocupado:{
    type: Boolean,
    default: false
  },
  img:{
    type: String,
  },
  orders:[{
    type: Schema.Types.ObjectId,
    ref: 'order'
  }],
  rating:{
    type: Number
  } 
},{
    timestamps:true,
    versionKey: false
})

deliverySchema.methods.encryptPassword= async (password: String)  =>  {
  const salt =await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}
deliverySchema.methods.validatePassword = function (password: String) {
  return bcrypt.compare(password, this.password)
}

export default model('delivery',deliverySchema)