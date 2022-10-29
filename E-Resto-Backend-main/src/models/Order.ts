import {Schema,model} from 'mongoose'

const orderSchema = new Schema({
user_id:{
  type: Schema.Types.ObjectId,
  ref: 'user'
},
delivery_id:{
  type: Schema.Types.ObjectId,
  ref: 'delivery'
},
date:{
  type: Date,
  default: Date.now
},
payment:{
  type: String,
  // require: true
},
subtotal:{
  type: Number,
  // require: true
},
paid:{
  type: Boolean,
  // require: true
},
products:{
  type: Array,
},
total:  {
  type: Number
},
propina:  {
  type: Number
},
delivered:{
  type: Boolean,
  default: false
},
prepared:{
  type:Boolean,
  default:false
},
items:{
  type: Array
},
user:{
  type: Array
}
},{
    timestamps: true,
    versionKey: false
})
export default model('order',orderSchema)