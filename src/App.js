import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import Tables from './pages/tables/Tables';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';


export default function App() {
  return (

      <div>
        <BrowserRouter>

        <h1>Product Manager</h1>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tables" exact component={Tables}/>
          </Switch>

        </BrowserRouter>
      </div>
  );
}
