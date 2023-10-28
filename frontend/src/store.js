import { configureStore } from "@reduxjs/toolkit";

import {

  
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userProfileUpdateReducer,
  userRegisterReducer,
 
} from "./reducer/userReducer";
import { recipeCreateReducer, recipeListReducer } from "./reducer/recipeReducer";
import { restaurantCreateReducer, restaurantListReducer } from "./reducer/restaurantReducer";

const localStorageUserInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;



const preloadedState = {
  userLogin: {
    userInfo: localStorageUserInfo,
  },
 
};

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userList: userListReducer,
    userDetails: userDetailsReducer,
    userProfileUpdate: userProfileUpdateReducer,
    recipeCreate: recipeCreateReducer,
    recipeList: recipeListReducer,
    restaurantCreate: restaurantCreateReducer,
    restaurantList: restaurantListReducer
    
  },
  preloadedState,
});

export default store;