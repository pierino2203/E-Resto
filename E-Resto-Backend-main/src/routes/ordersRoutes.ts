import { Router } from 'express'
import { addDelivery, deleteOrder, deliveredOrder, editOrder, getOrderById, getOrders, postOrders } from '../controllers/orderController';

const orderRouter = Router();
orderRouter.get('/order',getOrders)
orderRouter.post('/order',postOrders)
orderRouter.get('/order/:id',getOrderById)
orderRouter.delete('/order/:id',deleteOrder)
orderRouter.put('/order/edit/:id',editOrder)
orderRouter.put('/order/add/:id',addDelivery)
orderRouter.put('/order/delivered/:id',deliveredOrder)
export default orderRouter;