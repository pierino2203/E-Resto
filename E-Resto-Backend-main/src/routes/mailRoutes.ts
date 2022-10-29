import {Router} from 'express'
import { sendSubscribeEmail, sendUserBannedEmail, sendWelcomeEmail, setContact } from '../controllers/mailController';
import { setNewPass } from '../controllers/userController';

const mailRouter = Router();

//por ahora todo por rutas, cuando tengamos las funciones de logueo y baneo de usuarios, se borran

mailRouter.post('/sendWelcomeMail/:mail', sendWelcomeEmail)
mailRouter.post('/sendSubscribeMail/:mail', sendSubscribeEmail)
mailRouter.post('/sendRecuperaContra/:mail', setNewPass)
mailRouter.post('/contactMailing', setContact)



export default mailRouter;