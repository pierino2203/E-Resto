import { Schema,model } from 'mongoose'


interface Product {
    name: string,
    description: string,
    price:number,
    stock:number,
    rating:number,
    off:number,
    category:string,
    // diet:Array,
    img:string
    review_product: Array<{}>
}

const ProductSchema = new Schema<Product>({
    name:{
        type:String,
        required: true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        require:true
    },
    rating:{
        type: Number
    },
    off:{
        type: Number,
        default: 0
    },
    img:{
        type:String,
        required:true
    },
    category:{
        type: String
    },
    review_product:[{
        type: Schema.Types.ObjectId,
        ref: 'reviews',
    }]
    // diet:{
    //     type: Array,
    //     default: []
    // }   
    
},{
    timestamps: true,
    versionKey:false
})

export default model('products',ProductSchema)