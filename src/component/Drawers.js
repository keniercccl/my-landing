import React from 'react';
import Lista from "./Lista";

import {
  makeStyles,
  Drawer,
  Divider,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles( theme => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 240,
  },
  avatar : {
    display: 'flex',
    justifyContent: 'center',
    
  }
}))

function Drawers(props) {

  const classes = useStyles();

  return (
    <Drawer 
      className = {classes.drawer}
      classes = {{
        paper: classes.drawerPaper,
      }}
      anchor = "left"
      variant = {props.variant}
      open = {props.open}
      onClose = {props.onClose ? props.onClose : null}
      >

    <div className = {classes.toolbar} />

    <Avatar 
    src = "src/imgs/avatar.jpeg"
    className = {classes.avatar} >K</Avatar>
    
    <Divider />

      <Lista />

    </Drawer>
  
  );
}

export default Drawers;