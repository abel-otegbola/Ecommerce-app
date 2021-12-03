import React from 'react';
import Navbar from './components/navbar'
import Home from './components/home'
import Footer from './components/footer'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Cart from './pages/cart'
import Register from './pages/register'
import Shop from './pages/shop'
import Single from './pages/single'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wishlist from './pages/wishlist';

function App() {
  return (
    <div className="container">
      
      <Router>
        <Navbar/>
          <Route path="/" exact component={Home}/>
          <Route path="/loginPage" exact component={() => <Login />}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/dashboard" exact component={() => <Dashboard/>}/>
          <Route path="/cart" exact component={() => <Cart/>}/>
          <Route path="/wishlist" exact component={() => <Wishlist/>}/>
          <Route path="/single" exact component={() => <Single/>}/>
          <Route path="/shop" exact component={Shop}/>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
