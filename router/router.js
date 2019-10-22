const express = require('express')
const router = express.Router();
const userController = require('../controller/user')


router
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser)

router
    .route('/:id')
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)



//router.get('/',userController.getUsers)
//router.get('/:id',userController.getUser)
//router.post('/',userController.createUser)
//router.put('/:id',userController.updateUser)
//router.delete('/:id',userController.deleteUser)

   

module.exports = router;