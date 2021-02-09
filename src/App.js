import React, {useEffect} from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Switch, Route } 
from 'react-router-dom';
import Checkout from './Checkout.js';
import Login from './Login.js';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders.js'


const promise = loadStripe('pk_test_51HVSp6G2IrXDAKaxWjMFKynuYSkSkbyK91s7MOwhqp9IWGxUlydb4FXz5GjQ2qDn24vLBC9OuFC67OMyLAVjLEAq00FvDYLV55')

function App() {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads..

    auth.onAuthStateChanged(authUser => {
      console.log('Welcome',  authUser);

      if (authUser) {
        // the user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
