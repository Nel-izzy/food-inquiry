import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, ListGroup,  ListGroupItem
  
   } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import Message from "../components/Message";

import RecipeSearchBox from "../components/RecipeSearchBox";
import { listRecipes } from "../actions/recipeActions";
import UserProfile from "../components/UserProfile";

const HomeScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  
  
 
  const {recipes, error, loading} = useSelector((state) => state.recipeList);
 

  function getRandomAmount(amount) {
    return Math.floor(Math.random() * amount);
  }



  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }else{
      
      dispatch(listRecipes())
     
    }

   
 
  }, [userInfo, navigate, dispatch]);

  

  return (
    <>
      <Row className="py-5">
        <UserProfile />
        <Col xs={12} md={5}>
          <h4 className="text-center">Trending Recipes</h4>
          <ListGroup>

           {loading ? <Loader /> : error ? <Message>{error}</Message>:
           recipes.map(recipe=>{
            // const recipeCopy = {...recipe}
            // recipeCopy['price'] = getRandomAmount(1000)
            // const newRecipe = Object.assign({}, recipeCopy )

            return <ListGroupItem key={recipe.id} className="justify-content">
              <span>{recipe.title}</span>
            </ListGroupItem>
            
           }
            
           )}
          </ListGroup>
          
          
        </Col>
        <Col xs={12} md={4}>
          <h4 className="text-center"><RecipeSearchBox /></h4>
          
        
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;