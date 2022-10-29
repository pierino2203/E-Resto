import {Router} from 'express'
import { getDiets, postDiets } from '../controllers/dietController';

const dietRouter = Router();
dietRouter.get('/diet',getDiets)
dietRouter.post('/diet',postDiets)

export default dietRouter;