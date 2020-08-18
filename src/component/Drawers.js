import React from 'react';
import Lista from "./Lista";

import {
  makeStyles,
  Drawer,
  Divider
} from "@material-ui/core";
import theme from './Themesui';

const useStyles = makeStyles( theme => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 240,
  },
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
    <Divider />

      <Lista />

    </Drawer>
  
  );
}

export default Drawers;