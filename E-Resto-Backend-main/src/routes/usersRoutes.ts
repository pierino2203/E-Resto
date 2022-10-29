import { Router } from "express"
import {verifyToken} from '../controllers/utils/verify'
import { banUser, deleteUser, editUser, findUserById, getUser, noBanUser, postUser, setUserAsAdmin, userLogin, userRegister, userToken  } from "../controllers/userController";


const userRouter = Router()
userRouter.get('/user',getUser)
userRouter.post('/user',postUser)
userRouter.get('/user/token',verifyToken,userToken)
userRouter.get('/user/:id',verifyToken,findUserById)
userRouter.delete('/user/:id',deleteUser)
userRouter.put('/user/:id',editUser)
userRouter.post('/user/register',userRegister)
userRouter.post('/user/login', userLogin)
userRouter.put('/banUser/:id', banUser)
userRouter.put('/noBanUser/:id', noBanUser)
userRouter.put('/setAdmin/:id', setUserAsAdmin)
export default userRouter;