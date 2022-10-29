import { Schema,model } from 'mongoose'
const bcrypt= require('bcryptjs')

export interface User {
  name: string,
  lastName: string,
  userName: string,
  mail: string,
  password: string,
  adress: string,
  admin: boolean,
  baneado: boolean,
  token: string,
}

const UserSchema = new Schema({
  name:{
    type: String,
    require: true
  },
  lastName:{
    type: String,
    require: true
  },
  userName:{
    type: String,
    require: true,
    unique: true

  },
  mail:{
    type: String,
    require: true,
    unique: true
  },
  password:{
    type: String,
    require: true
  },
  adress:{
    type: String,
    require: true
  },
  admin:{
    type: Boolean,
    default: false
  },
  baneado:{
    type: Boolean,
    default: false
  },
  img:{
    type: String
  },
  token:{
    type:String
  },
  google:{
    type: Boolean,
    default: false
  },
  orders:[{
    type: Schema.Types.ObjectId,
    ref: 'order',
    
  }],
  reviews_user:[{
    type: Schema.Types.ObjectId,
    ref: 'reviews',
  }]
},{
  timestamps: true,
  versionKey:false
})

UserSchema.methods.encryptPassword= async (password: String)  =>  {
  const salt =await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}
UserSchema.methods.validatePassword = function (password: String) {
  return bcrypt.compare(password, this.password)
}
export default model('user',UserSchema)