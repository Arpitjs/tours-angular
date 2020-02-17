let express = require('express')
let Router = express.Router()
let userController = require('../controllers/userController')
let authController = require('../controllers/authController')
let multerConfig = require('../utils/multerConfigs')

Router.route('/')
.get(authController.protect,
    authController.restrictTo('admin', 'guide'),
    userController.getAllUsers)

.post(authController.signUp)

Router.route('/:id')
.get(userController.getUser)

.patch(multerConfig.setMulter,
    multerConfig.uploadSingle,
    userController.updateUser)

.delete(userController.deleteUser)

Router.post('/login', authController.login)
Router.post('/forgotPassword', authController.forgotPassword)
Router.patch('/resetPassword/:token', authController.resetPassword)
Router.get('/checkUsername/:username', userController.checkUsername)
module.exports = Router