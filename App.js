/*import React from "react";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import './App.css';

function App() {
  return (
    <div className="App">
        
      <Router>
        <Header />
        

        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
*/
import React from 'react';
import{connect} from 'react-redux';
import {Increment} from './redux/action';
import {Decrement} from './redux/action';
const App=({local_variable,Increment,Decrement})=>{
    return(
        <div>
            <center>
            <h1>
                {local_variable}
            </h1>
            <div>
            <button onClick={()=>Increment(5)}>incrment</button><br/>
            <button onClick={()=>Decrement(5)}>decrement</button>
            </div>
            </center>

        </div>
    )
}
const mapStateToprops=(state)=>({
    local_variable :state
})
export default connect(mapStateToprops,{Increment,Decrement})(App);