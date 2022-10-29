import {Router} from 'express'
import { deleteDelivery, deliveryLogin, deliveryToken, editDelivery, findDeliveryById, getDelivery, registerDelivery } from '../controllers/deliverController';
import { verifyToken } from '../controllers/utils/verify';
import { verifyDeliveryToken } from '../controllers/utils/verifyDelivery';

const deliveryRouter = Router()

deliveryRouter.get('/delivery',getDelivery)
deliveryRouter.post('/delivery/register',registerDelivery)
deliveryRouter.post('/delivery/login',deliveryLogin)
deliveryRouter.get('/delivery/token',verifyDeliveryToken,deliveryToken)
deliveryRouter.get('/delivery/:id',findDeliveryById)
deliveryRouter.put('/delivery/:id',editDelivery)
deliveryRouter.delete('/delivery/:id',deleteDelivery)


export default deliveryRouter;