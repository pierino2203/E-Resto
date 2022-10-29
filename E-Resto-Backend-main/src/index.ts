import app from './app'
import  './database'
import dotenv from 'dotenv'
dotenv.config()
const port= process.env.PORT || 3000
app.listen(port,() => {
  console.log(`Server on port ${port}`)
})