import { ObjectId } from "mongoose"


export interface product {
    name: string,
    description: string,
    price: number,
    stock: number,
    rating: number,
    img: string,
    category:string,
    off: number
}

export interface user {
    _id: ObjectId,
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
