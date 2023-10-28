import express from 'express';
const router = express.Router();
import {
 getRestaurants,
 addRestaurant
 
} from '../controllers/restaurantController.js';
import { protectRoute} from '../middleware/authMiddleware.js'



router
  .route('/')
  .get(protectRoute, getRestaurants)
  .post(protectRoute, addRestaurant);



export default router;