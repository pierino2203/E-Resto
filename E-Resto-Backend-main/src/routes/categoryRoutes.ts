import {Router} from 'express'
import { getCategory, postCategory } from '../controllers/categoryController';

const categoryRouter = Router()
categoryRouter.get('/category',getCategory)
categoryRouter.post('/category',postCategory)

export default categoryRouter;