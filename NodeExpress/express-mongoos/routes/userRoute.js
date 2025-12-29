const express = require('express');
const {createUser,getUsers,updateUser,deleteUser} = require('../controller/userController');

const router = express.Router();


router.post('/add-users', createUser);
router.get('/get-users', getUsers);
router.put('/update-user/:id', updateUser);
router.delete('/delete-user/:id',deleteUser);
module.exports = router;