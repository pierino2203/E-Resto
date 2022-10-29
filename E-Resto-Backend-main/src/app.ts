import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes/index'
const bodyParser = require ('body-parser')



const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/',router)

export default app