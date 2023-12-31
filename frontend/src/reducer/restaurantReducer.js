import { RESTAURANT_CREATE_FAIL, RESTAURANT_CREATE_REQUEST, RESTAURANT_CREATE_RESET, RESTAURANT_CREATE_SUCCESS, RESTAURANT_LIST_FAIL, RESTAURANT_LIST_REQUEST, RESTAURANT_LIST_SUCCESS } from "../types/restaurantTypes";


export const restaurantCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case RESTAURANT_CREATE_REQUEST:
        return { loading: true };
      case RESTAURANT_CREATE_SUCCESS:
        return { loading: false, success: true, restaurant: action.payload };
      case RESTAURANT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case RESTAURANT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const restaurantListReducer = (state = { restaurants: [] }, action) => {
    switch (action.type) {
      case RESTAURANT_LIST_REQUEST:
        return { loading: true, restaurants: [] };
      case RESTAURANT_LIST_SUCCESS:
        return {
          loading: false,
          restaurants: action.payload,
          
        };
      case RESTAURANT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };