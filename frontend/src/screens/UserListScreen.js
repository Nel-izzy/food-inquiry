import React, { useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { Row, Col, ListGroup,  ListGroupItem} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";


import { listUsers } from "../actions/userActions";
import UserProfile from "../components/UserProfile";

const UserListScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
 
 
  const {users, loading} = useSelector((state) => state.userList);
 



  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }else{
      
      dispatch(listUsers())
     
    }

   
 
  }, [userInfo, navigate, dispatch]);

  

  return (
    <>
      <Row className="py-5">
        <UserProfile />
        <Col xs={12} md={6}>
          <h4 className="text-center">All Users</h4>
          <ListGroup>

           {loading ? <Loader /> : 
           users.map(user=>(
            <ListGroupItem key={user._id} className="justify-content">
              <span>{user.name}</span><span>{user.email}</span>
            </ListGroupItem>
           ))}
          </ListGroup>
          
          
        </Col>
        
      </Row>
    </>
  );
};

export default UserListScreen;