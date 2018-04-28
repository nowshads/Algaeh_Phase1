import React, { Component } from "react";
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import SideMenuBar from "./../SideMenuBar/SideMenuBar.js";
import style from "./header.scss";
import Paper from 'material-ui/Paper';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


const styles = {
  app_bar: {
    background: '#00BEBD'
  }
}

const appColor = {
  background: '#292929'
};


const paper_style = {
  height: 1350,
  width: 300,
  position: 'absolute',
  top: 0,
  display: 'inline-block',
  zIndex: 10000
};

const titleStyles = {
  title: {
    color: '#fff',
    paddingRight: 10
  },
  organisation: {
      color: '#d3d3d3'
  }
};


class Header extends Component {
  constructor(props){
    super(props);
      this.state = {
    open: false
  };
  }

  toggleDrawer(){
    this.setState({
      open: true
    });
  }

  closeMenuBar(){
    this.setState({
      open: false
    })
  }

  render() {
    return (
        <div className="hptl-phase1-registeration">
                  <AppBar position="static" style={styles.app_bar}>
                    <Toolbar>
                      <IconButton onClick={this.toggleDrawer.bind(this)} color="inherit" aria-label="Menu">
                        <MenuIcon />
                      </IconButton>
                      <Typography variant="title" color="inherit" >
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  
        </div>
    );
  }
}

export default (Header);