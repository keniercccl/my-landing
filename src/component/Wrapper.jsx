import React, {useState} from 'react';
import Navbarr from "./Navbarr.js";
import Contacts from "./Contacts.js";
import Aboutme from "./Aboutme.js";
import Working from "./Working.js";
import Contactme from "./Contactme.js";
import Drawers from './Drawers.js';

import {
  makeStyles,
  Grid,
  Hidden,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  centralizar :  {
    alignContent : 'center'
  }
}))

const Wrapper = () => {

  const [abrir, setAbrir] = React.useState(false);

  const accionAbrir = () => {
    setAbrir(!abrir)
  }

      const classes = useStyles();

      return (
        <div>
        <Navbarr 
        accionAbrir = {accionAbrir}/>

        <Hidden>
          <Drawers 
            variant = "temporary"
            open = {abrir}
            onClose = {accionAbrir}             
            />
        </Hidden>

          <div className = {classes.content}>

            <Aboutme />
            <Working />
            <Contactme />

            <Grid 
            container
            justify = 'center'>
              <Contacts />
            </Grid>

          </div>

            </div>
        );
      }
      
      export default Wrapper;