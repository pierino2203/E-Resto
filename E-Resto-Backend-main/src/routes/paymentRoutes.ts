import {Router} from 'express'
import { paymentStripe } from '../controllers/paymentController';
import { verifyToken } from '../controllers/utils/verify';

const stripeRouter = Router();

//por ahora todo por rutas, cuando tengamos las funciones de logueo y baneo de usuarios, se borran

stripeRouter.post('/payment',paymentStripe)



export default stripeRouter;