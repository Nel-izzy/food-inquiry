import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RecipeSearchBox = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
   // call the addrecipe function and pass the search keyword/phrase
      navigate(`/recipe/${keyword}`);
    } else {
      navigate("/");
    }
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
      <Button type="submit" className="p-2" variant="outline-primary">
        Search
      </Button>
    </Form>
  );
};

export default RecipeSearchBox;