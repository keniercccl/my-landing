import React from 'react';

import { AppBar, Toolbar, Typography , IconButton,makeStyles} from '@material-ui/core';
import {Menu , AccountCircle} from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up('sm')]:{
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    }
  },
  root : {
    display : 'flex'
  },
  title : {
    flexGrow : 1,
  },
  menuButton :  {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }
}))
 
const Navbarr = (props) => {

  const clases = useStyles();
 
  return (

      <AppBar
      className = {clases.appBar}
      position="static"
      color="primary">

        <Toolbar>

          <IconButton
          className = {clases.menuButton}
          edge = 'start' 
          onClick = {props.accionAbrir}
          >

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