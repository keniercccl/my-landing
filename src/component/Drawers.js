import React from 'react';
import Lista from "./Lista";

import {
  makeStyles, Drawer
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


function Drawers() {

  const classes = useStyles();

  return (
    <Drawer 
    className = {classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
    anchor="left"
    >
    <div className={classes.toolbar} />

      <Lista />

    </Drawer>
  
  );
}

export default Drawers;