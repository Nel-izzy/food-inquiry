import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

import { createRestaurant, listRestaurants } from "../actions/restaurantActions";
import { useDispatch} from "react-redux";


const RestaurantSearchBox = () => {
  const [keyword, setKeyword] = useState("");

  
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
   
      dispatch(createRestaurant(keyword));
      dispatch(listRestaurants(keyword));
      
    } else {
      dispatch(listRestaurants());
    }
    setKeyword("")
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <FormControl
        type="text"
        name="query"
        placeholder="Search Restaurants..."
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5 w-100"
      ></FormControl>
      <Button type="submit" className="p-2" >
        Search
      </Button>
    </Form>
  );
};

export default RestaurantSearchBox;