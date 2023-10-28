import { RECIPE_CREATE_FAIL, RECIPE_CREATE_REQUEST, RECIPE_CREATE_RESET, RECIPE_CREATE_SUCCESS, RECIPE_LIST_FAIL, RECIPE_LIST_REQUEST, RECIPE_LIST_SUCCESS } from "../types/recipeTypes";


export const recipeCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case RECIPE_CREATE_REQUEST:
        return { loading: true };
      case RECIPE_CREATE_SUCCESS:
        return { loading: false, success: true, recipe: action.payload };
      case RECIPE_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case RECIPE_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const recipeListReducer = (state = { recipes: [] }, action) => {
    switch (action.type) {
      case RECIPE_LIST_REQUEST:
        return { loading: true, recipes: [] };
      case RECIPE_LIST_SUCCESS:
        return {
          loading: false,
          recipes: action.payload,
          
        };
      case RECIPE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };