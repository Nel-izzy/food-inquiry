import asyncHandler from "express-async-handler";

import Recipe from "../models/recipeModel.js";
//import { generateToken } from "../utils/generateToken.js";

export const getRecipes = asyncHandler(async (req, res) => {
    const recipes = await Recipe.find({});
     res.json({ recipes });
  });

  export const addRecipe = asyncHandler(async (req, res) => {
    const { title, calorieCount, cookingInstruction } =
      req.body;
  
    const existingRecipe = await Recipe.findOne({ title });
    if (existingRecipe) {
      res.status(400);
      throw new Error("Recipe already Exists");
    } else {
      const recipe = await Recipe.create({
        user: req.user.id,
        title,
        calorieCount,
        cookingInstruction
      });
  
      if (recipe) {
        const {
          _id,
          title,
          calorieCount,
        cookingInstruction
        } = recipe;
  
        res.status(201).json({
          _id,
          title,
          calorieCount,
        cookingInstruction
        });
      } else {
        res.status(400);
        throw new Error("Invalid Recipe Data");
      }
    }
  });