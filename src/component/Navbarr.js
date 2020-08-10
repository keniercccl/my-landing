import React from 'react';
import { AppBar, Toolbar, Typography , IconButton,makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles(theme => ({
    offset : theme.mixins.toolbar,
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    root: {
      flexGrow: 1,
    }
    },
}))
 
const Navbarr = () => {

  const clases = useStyles();
 
  return (
    <div>

      <AppBar
      className = {clases.root}
      position="static" color="primary">

        <Toolbar>

          <IconButton
          className = {clases.menuButton}
          edge = 'start' >

            <MenuIcon fontSize = 'large'/>

          </IconButton>

          <Typography variant="h6" className = {clases.title}>
            BIENVENIDO
          </Typography>

          <AccountCircleIcon fontSize = 'large'/>

        </Toolbar>
      </AppBar>
      

    </div>
      
      )
}
 
export default Navbarr; 