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
  Button,
} from "@material-ui/core";
import TableFooter from '@material-ui/core/TableFooter';
import { withStyles } from '@material-ui/core/styles';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Home from "./Home";
import About from "./About";
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
            The BLM Platform
          </Typography>
          <Button href="/" className={classes.button} variant="contained" color="inherit" startIcon={<ListAltIcon />}>News Feed</Button>
          <Button href="/about" className={classes.button} variant="contained" color="inherit" startIcon={<ListAltIcon />}>About</Button>
          <Button href="/scrubber" className={classes.button} variant="contained" color="inherit" startIcon={<WallpaperIcon />}>Image Scrubber</Button>
        </Toolbar>
      </AppBar>
      <Switch style={{minHeight: "80vh"}}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/scrubber">
          <Scrubber />
        </Route>
      </Switch>
      <TableFooter style={{position: "sticky", marginTop: "15%", backgroundColor: "black", alignItems: "center", justifyContent: "center", display: "flex", padding: "20px", textAlign: "center", bottom: "0", height: "50px"}}>
          <IconButton edge="start" color="inherit">
            <img src={logo} style={{width: "35px"}} alt="Logo" />
          </IconButton>
          <Typography style={{color: "white"}} variant="body2">
            Contribute on <a style={{color: "red"}} href="https://github.com/MLH-Fellowship/0.2.2-blm-platform">GitHub</a>.
          </Typography>
      </TableFooter>
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
