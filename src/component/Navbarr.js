import React from 'react';

import { AppBar, Toolbar, Typography , IconButton,makeStyles} from '@material-ui/core';
import {Menu , AccountCircle} from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100% - ${240}px)`,
    marginLeft: 240,
  },
  root : {
    display : 'flex'
  },
  title : {
    flexGrow : 1,
  },
  
}))
 
const Navbarr = () => {

  const clases = useStyles();
 
  return (

      <AppBar
      className = {clases.appBar}
      position="static"
      color="primary">

        <Toolbar>

          <IconButton
          className = {clases.menuButton}
          edge = 'start' >

            <Menu fontSize = 'large'/>

          </IconButton>

          <Typography variant="h6" className = {clases.title}>
            BIENVENIDO
          </Typography>

          <IconButton
          className = {clases.menuButton}
          edge = 'start' >

            <AccountCircle fontSize = 'large'/>

          </IconButton>


        </Toolbar>
      </AppBar>

      )
}
 
export default Navbarr; 