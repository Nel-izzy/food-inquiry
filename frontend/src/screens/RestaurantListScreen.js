import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, ListGroup,  ListGroupItem
  
   } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import RestaurantSearchBox from "../components/RestaurantSearchBox";
import { listRestaurants } from "../actions/restaurantActions";
import UserProfile from "../components/UserProfile";
import Message from "../components/Message";


const RestaurantListScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 
 
  const {restaurants, error, loading} = useSelector((state) => state.restaurantList);



  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }else{
      
      dispatch(listRestaurants())
     
    }

   
 
  }, [userInfo, navigate, dispatch]);

  

  return (
    <>
      <Row className="py-5">
        <UserProfile />
        <Col xs={12} md={5}>
          <h4 className="text-center">Trending Restaurants</h4>
          <ListGroup>

           {loading ? <Loader /> : error ? <Message>{error}</Message>: restaurants.map(restaurant=>(
            <ListGroupItem key={restaurant._id}>
              {restaurant.name}
            </ListGroupItem>
           ))}
          </ListGroup>
          
          
        </Col>
        <Col xs={12} md={4}>
          <h4 className="text-center"><RestaurantSearchBox /></h4>
          
        
        </Col>
      </Row>
    </>
  );
};

export default RestaurantListScreen;