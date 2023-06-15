const express = require('express');
const router = express.Router();
const authorController = require('../controller/authorController')
const userController = require('../controller/userController')


router.post('/author',authorController.registerAuthor)
router.post('/user',userController.user)
router.post('/login',userController.loginUser)








module.exports=router;