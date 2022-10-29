import {Schema,model} from 'mongoose'

const dietSchema = new Schema({
  name:{
    type: String,
    require: true
  }
},{
  timestamps: true,
  versionKey: false
})

export default model('diet',dietSchema);