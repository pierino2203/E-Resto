import {Router} from 'express'
import { deleteProduct, editProduct, getProduct, getProductById, postProduct } from '../controllers/productController';
import { verifyToken } from '../controllers/utils/verify';

const productRouter = Router();
productRouter.get('/product',getProduct)
productRouter.post('/product',postProduct)
productRouter.get('/product/:id',getProductById)
productRouter.put('/product/:id',editProduct)
productRouter.delete('/product/:id',deleteProduct)
export default productRouter;