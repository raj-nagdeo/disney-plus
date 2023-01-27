import React, { useEffect, useReducer, useState } from "react";
import Header from "./component/Header";
import './App.css';
import Home from "./component/Home";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Detail from "./component/Detail";
import Login from "./component/Login";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return ( 
    <Provider store={store}> 
        <div className="App">
        <Router>
          <Header/>

          <Routes>
              <Route path="login" element={<Login />} />
              <Route path="detail/:id"  element={<Detail/>} />
   
              <Route path="/"  element={<Home/>} />         
           </Routes>
        
        </Router>
        
       
       
        </div>
        </Provider>
       

      )

 
}

export default App;