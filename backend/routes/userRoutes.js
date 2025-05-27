import express from 'express'
import userController from "../controllers/userController.js"
import userAuth from '../middlewares/auth.js'
const userRouter = express.Router()

userRouter.post("/register",userController.registerUser)
userRouter.post("/login",userController.loginUser)
userRouter.get("/credits",userAuth,userController.userCredits)
userRouter.post("/pay-razor",userAuth,userController.paymentRazorpay)
userRouter.post("/verify-razor",userAuth,userController.verifyRazorpay)

export default userRouter

// http://localhost:/4000/api/user/register
// http://localhost:/4000/api/user/login
// http://localhost:4000/api/user/credits