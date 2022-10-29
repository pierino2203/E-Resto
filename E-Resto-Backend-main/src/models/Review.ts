import {Schema, model} from 'mongoose'

const reviewSchema = new Schema({
  user_id:  {
    type: Schema.Types.ObjectId,
    ref: 'user' 
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'product'
  },
  rating: {
    type: Number,
  },
  comment:  {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
},{
  timestamps: false,
  versionKey: false
})

export default model('review',reviewSchema)