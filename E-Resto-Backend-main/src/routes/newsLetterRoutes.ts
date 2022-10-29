import {Router} from 'express'
import { addMailNewsLetter, deleteMailNewsLetter, getMailsNewsLetter } from '../controllers/newsLetterController';

const newsLetterRouter = Router();

newsLetterRouter.get('/newsletter',getMailsNewsLetter)
newsLetterRouter.post('/newsletter',addMailNewsLetter)
newsLetterRouter.delete('/newsletter',deleteMailNewsLetter)

export default newsLetterRouter