import express from 'express';
const router = express.Router();
import {
 getRecipes,
 addRecipe
 
} from '../controllers/recipeController.js';
import { protectRoute} from '../middleware/authMiddleware.js'



router
  .route('/')
  .get(protectRoute, getRecipes)
  .post(protectRoute, addRecipe);



export default router;