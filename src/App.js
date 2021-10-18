import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./assets/css/base/base.css";
import "./App.css";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Pagina404 from "./paginas/Pagina404";
import Navbar from "./componentes/Navbar";
import Post from "./paginas/Post";
import Categoria from "./paginas/Categoria";

function App() {
  return (
    
    <><Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/categoria/:id">
          <Categoria />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router></>
  );
}

export default App;
