import path from 'path'
import  express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import mongoose from 'mongoose'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)


app.get('/api/config/paypal', (req, res) => 
res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

//app.get('/api/products', (req, res) => {
//    res.json(products)
//})
app.use(notFound)

app.use(errorHandler)

//app.get('/api/products/:id', (req, res) => {
//    const product = products.find(p => p._id === req.params.id)
//   res.json(product)
//})

const PORT = process.env.PORT || 5000

//app.listen(
//    PORT, 
//    console.log(`server running ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))


    const uri = process.env.MONGO_URL;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open', () => {
console.log("Connected Database Successfully");
});
app.listen(5000,function(req,res){
console.log('Server is started on port 5000');
});