import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import {store, persistor} from './redux/store';

import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import Footer from './components/footer/footer'
import Login from './pages/login/login'
import Dashboard from './pages/dashboard/dashboard'
import Cart from './pages/cart/cart'
import Register from './pages/register/register'
import Shop from './pages/shop/shop'
import Single from './pages/singleProduct/single'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wishlist from './pages/wishlist/wishlist';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  </React.StrictMode>
  );
}


export default App;
