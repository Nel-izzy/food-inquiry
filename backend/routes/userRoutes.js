import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUserById,
  getUsers,
  
 
} from '../controllers/userController.js';
import { protectRoute} from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(getUsers);
router.post('/login', authUser);

router
  .route('/profile')
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);


 
router
  .route('/:id')

  .get(protectRoute, getUserById)




export default router;