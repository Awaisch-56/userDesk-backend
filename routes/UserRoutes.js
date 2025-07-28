///  Route definitions

const express = require('express');
const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController');

router.post('/create', createUser);
router.get('/getAll', getUsers);
router.get('/get/:id', getUserById);       
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);  

module.exports = router;
