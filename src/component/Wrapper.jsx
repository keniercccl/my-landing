import React from 'react';
import Navbarr from "./Navbarr.js";
import Contacts from "./Contacts.js";

import {
  makeStyles,
  Typography,
  Grid
} from '@material-ui/core';
import Drawers from './Drawers.js';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginLeft: 240,
  },
  centralizar :  {
    alignContent : 'center'
  }
}))

const Wrapper = () => {

      const classes = useStyles();

      return (
        <div>
        <Drawers />
        <Navbarr />

          <div className = {classes.content}>

              <Typography 
              variant="h2"
              color="primary"
              align = "center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>

                <p>lorem</p>

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