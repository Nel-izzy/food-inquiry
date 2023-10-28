import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

import RestaurantListScreen from './screens/RestaurantListScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserListScreen from './screens/UserListScreen';




const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/users' element={<UserListScreen />} />
           
          
           
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/signup' element={<RegisterScreen />} exact />
            <Route path='/recipes' element={<HomeScreen />} exact />
            <Route path='/restaurants' element={<RestaurantListScreen />} exact />

            <Route path='/' element={<HomeScreen />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;