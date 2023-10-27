import asyncHandler from "express-async-handler";

import Restaurant from "../models/restaurantModel.js";
//import { generateToken } from "../utils/generateToken.js";

export const getRestaurants = asyncHandler(async (req, res) => {
    const restaurants = await Restaurant.find({});
     res.json({ restaurants });
  });

  export const addRestaurant = asyncHandler(async (req, res) => {
    const { name, location } =
      req.body;
  
    const existingRestaurant = await Restaurant.findOne({ name });
    if (existingRestaurant) {
      res.status(400);
      throw new Error("Restaurant already Exists");
    } else {
      const restaurant = await Restaurant.create({
        user: req.user.id,
        name,
        location
      });
  
      if (restaurant) {
        const {
          _id,
          name,
          location
        } = restaurant;
  
        res.status(201).json({
          _id,
          name,
          location
        });
      } else {
        res.status(400);
        throw new Error("Invalid Restaurant Data");
      }
    }
  });