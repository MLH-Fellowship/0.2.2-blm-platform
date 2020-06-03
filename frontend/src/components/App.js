import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Home from "./Home";
import Scrubber from "./Scrubber";
import logo from "../assets/logo.svg";

function App(props) {
  const { classes } = props;
  return (
    <Router>
      <AppBar position="static" style={{backgroundColor: "black"}}>
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <img src={logo} style={{width: "35px"}} alt="Logo" />
          </IconButton>
          <Typography variant="h6" style={{ flex: 1 }}>
            BLM Platform
          </Typography>
          <Button href="/" className={classes.button} variant="contained" color="inherit" startIcon={<ListAltIcon />}>News Feed</Button>
          <Button href="/scrubber" className={classes.button} variant="contained" color="inherit" startIcon={<WallpaperIcon />}>Image Scrubber</Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/scrubber">
          <Scrubber />
        </Route>
      </Switch>
    </Router>
  );
}

const styles = {
  button: {
    margin: "10px",
    backgroundColor: "#3f51b5",
    borderRadius: "30px",
    "&:hover": {
      background: "#5d5d5d",
   },
  }
};

export default withStyles(styles)(App);
