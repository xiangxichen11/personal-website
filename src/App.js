import React from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom"; 
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from './Components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route component={Home} path='/personal-website' exact/>
        <Route component={About} path='/personal-website/about'/>
        <Route component={Projects} path='/personal-website/projects'/>
        <Route component={Contact} path='/personal-website/contact'/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
