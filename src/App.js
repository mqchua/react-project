import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import Tables from './pages/tables/Tables';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import { Navbar,Nav } from 'react-bootstrap';


export default function App() {
  return (

      <div>
        <BrowserRouter>

        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Product Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/tables">Tables</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tables" exact component={Tables}/>
          </Switch>

        </BrowserRouter>
      </div>
  );
}
