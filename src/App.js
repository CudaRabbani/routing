import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

import NavBar from './components/navbar'
import LoginForm from "./components/loginForm"
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notfound";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
          <div className="container m-2">
              <Switch>
                  <Route path="/login" component={LoginForm} />
                  <Route path="/movies" exact component={Movies} />
                  <Route path="/customers" component={Customers} />
                  <Route path="/rentals" component={Rentals} />
                  <Route path="/not-found" component={NotFound} />
                  <Redirect from="/" exact to="/movies" />
                  <Redirect to="/not-found"/>
                  {/*<Route path="/products/:id" component={ProductDetails} />
                  <Route path="/products"
                         render = {(props) => <Products sortBy="newest" {...props} />}
                  />
                  <Route path="/posts/:year?/:month?" component={Posts} />
                  <Redirect from="/message" to="/posts" />
                  <Route path="/admin" component={Dashboard} />
                  <Route path="/not-found" component={NotFound} />
                  <Route path="/" exact component={Home} />
                  <Redirect to="/not-found" />*/}
              </Switch>
          </div>
      </div>
    );
  }
}

export default App;
