import axios from "axios";

import { logout } from "./userActions";
import { RESTAURANT_CREATE_FAIL, RESTAURANT_CREATE_REQUEST, RESTAURANT_CREATE_SUCCESS, RESTAURANT_LIST_FAIL, RESTAURANT_LIST_REQUEST, RESTAURANT_LIST_SUCCESS } from "../types/restaurantTypes";

export const createRestaurant =
  (name) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: RESTAURANT_CREATE_REQUEST,
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
        `/api/restaurants/`,
        { name},
        config
      );

      dispatch({
        type: RESTAURANT_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: RESTAURANT_CREATE_FAIL,
        payload: message,
      });
    }
  };

  export const listRestaurants =
  (keyword) =>
  async (dispatch) => {
    try {
      dispatch({ type: RESTAURANT_LIST_REQUEST });

    

      let URL;
      if(keyword){
        URL = `https://api.spoonacular.com/food/restaurants/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${keyword}`
      }else{
        URL = `https://api.spoonacular.com/food/restaurants/search?apiKey=${process.env.REACT_APP_API_KEY}`
      }
       

      const { data } = await axios.get(URL);

      dispatch({
        type: RESTAURANT_LIST_SUCCESS,
        payload: data.restaurants.slice(0, 10),
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
        type: RESTAURANT_LIST_FAIL,
        payload: message,
      });
    }
  };
