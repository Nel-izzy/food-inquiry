import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

import { createRecipe, listRecipes } from "../actions/recipeActions";
import { useDispatch} from "react-redux";


const RecipeSearchBox = () => {
  const [keyword, setKeyword] = useState("");

 
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
   
      dispatch(createRecipe(keyword));
      dispatch(listRecipes(keyword));
      
    } 
    setKeyword("")
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <FormControl
        type="text"
        name="query"
        placeholder="Search Recipes..."
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5 w-100"
      ></FormControl>
      <Button type="submit" className="p-2" >
        Search
      </Button>
    </Form>
  );
};

export default RecipeSearchBox;