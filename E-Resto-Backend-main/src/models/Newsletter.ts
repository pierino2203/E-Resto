import {Schema,model} from 'mongoose'

const newsLetterSchema = new Schema({
    mail:   {
        type: String,
        require: true
    }
},{
    timestamps: true,
    versionKey:false
})

export default model('newsLetter',newsLetterSchema)