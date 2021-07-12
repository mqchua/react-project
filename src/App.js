import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Home from './pages/home/Home';
import Tables from './pages/tables/Tables';


const useStyles = makeStyles((theme) => ({
 root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    outline: "5px dotted green",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    outline: "5px dotted green",
}
}));

export default function App() {

  const classes = useStyles();

  return (

        <BrowserRouter>

         <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Product Manager
              </Typography>
              <Button color="inherit" href="/">Home</Button>
              <Button color="inherit" href="/tables">Tables</Button>
            </Toolbar>
          </AppBar>


          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tables" exact component={Tables}/>
          </Switch>

        </BrowserRouter>
  );
}
