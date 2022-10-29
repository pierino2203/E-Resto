const nodemailer = require('nodemailer')
import dotenv from 'dotenv'

dotenv.config()
const pass= process.env.EMAILER_PASS 

export const createTransporter = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "tastehenrysfood@gmail.com",
            pass: pass
        }
    })
    return transport
}