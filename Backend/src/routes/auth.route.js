const {Router} = require('express')
const authRouter = Router()
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middleaware/auth.middleware")

/**
 * @routes POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register",authController.registerUserController)

/**
 * @route POST /api/auth/login
 * @description login user with email and password
 * @access Public
 */
authRouter.post("/login",authController.loginUserController)

/**
 * @route GET /api/auth/layout
 * @description clear token from user cookie and add the token in blacklist
 * @access Public
 */
authRouter.get("/logout",authController.logoutUserController)

/**
 * @routes GET /api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */
authRouter.get("/get-me",authMiddleware.authUser,authController.getMeController)

module.exports = authRouter