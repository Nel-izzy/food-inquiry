import React, {useState, useEffect } from 'react'
import {Link, useNavigate } from "react-router-dom";
import { Col, Card, Button,
    Form,
    FormGroup,
    FormLabel,
    FormControl,
     } from "react-bootstrap";
     import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, listUsers,   updateUserProfile, userProfileUpdateReset} from "../actions/userActions";

const UserProfile = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user, loading: loadingUser} = useSelector((state) => state.userDetails);
    const {success: successUpdate} = useSelector((state) => state.userProfileUpdate);
    const {userInfo} = useSelector((state) => state.userLogin);
    

    useEffect(() => {
        if (!userInfo) {
          navigate("/login");
        }else{
          
          
          if(!user.name  || successUpdate){
            dispatch(userProfileUpdateReset());
            
            dispatch(getUserDetails('profile'));
            
          }else {
            setName(user.name);
            setEmail(user.email);
          }
        }
    
       
     
      }, [userInfo, navigate, dispatch, user, successUpdate]);

      const updateUserHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          setMessage('Passwords do not match');
        } else {
          dispatch(updateUserProfile({ id: user._id, name, email, password }));
        }
        
      };
  return (
    <>
    <Col xs={12} md={3}>
        <h4 className="text-center">Profile </h4>    
        
        <Card style={{ width: '250px', padding: '10px'}} >
        <Form onSubmit={updateUserHandler}>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormControl
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='Enter Name'
            ></FormControl>
          </FormGroup>

          <FormGroup className='py-3'>
            <FormLabel>Email Address</FormLabel>
            <FormControl
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder='Enter Email'
            ></FormControl>
          </FormGroup>

          <FormGroup className='py-3'>
            <FormLabel>Password</FormLabel>
            <FormControl
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder='Enter Password'
            ></FormControl>
          </FormGroup>

          <FormGroup className='py-3'>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              type='password'
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              placeholder='Confirm Password'
            ></FormControl>
          </FormGroup>

          <Button variant='info' type='submit' className="btn btn-sm">
            Update Account
          </Button>

        </Form>
        </Card>
        </Col>  
    </>
  )
}

export default UserProfile

