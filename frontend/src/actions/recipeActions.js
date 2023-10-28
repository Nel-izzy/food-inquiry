import axios from "axios";
import { RECIPE_CREATE_FAIL, RECIPE_CREATE_REQUEST, RECIPE_CREATE_SUCCESS, RECIPE_LIST_FAIL, RECIPE_LIST_REQUEST, RECIPE_LIST_SUCCESS } from "../types/recipeTypes"
import { logout } from "./userActions";

export const createRecipe =
  (title, calorieCount, cookingInstruction) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: RECIPE_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/recipes/`,
        { title, calorieCount, cookingInstruction },
        config
      );

      dispatch({
        type: RECIPE_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: RECIPE_CREATE_FAIL,
        payload: message,
      });
    }
  };

  export const listRecipes =
  (keyword) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: RECIPE_LIST_REQUEST });

    

      let URL;
      if(keyword){
        URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${keyword}`
      }else{
        URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`
      }
       

      const { data } = await axios.get(URL);

      dispatch({
        type: RECIPE_LIST_SUCCESS,
        payload: data.results,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, Token failed") {
        dispatch(logout());
      }
      dispatch({
        type: RECIPE_LIST_FAIL,
        payload: message,
      });
    }
  };
