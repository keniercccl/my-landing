import React from 'react';
import Contacts from "./Contacts.js";
import {
  Grid,
  TextField,
  Button
 } from '@material-ui/core';
 import { Delete , Send } from "@material-ui/icons";
 import { makeStyles } from "@material-ui/styles";

 const useStyles = makeStyles ({
   root : {
     margin : 10,
     borderRadius : 3,
     backgroundColor : '#eceff1',
     justifyContent: 'center',
     alignItems : 'center',
   },
   buttonContents : {
     display : 'flex'
   },
   buttonStyle :{
     backgroundColor: 'red'
   },
   
 })

function Contactme(props) {
  
  const classes = useStyles();
  
  return (
    <div  >
      <Grid 
      className = {classes.root}
      > 
        <Contacts />
        <Grid spacing={3}>

          <TextField id="standad-basic" margin ="dense" label= "Tu Nombre" />
            <br/>
          <TextField id="outlined-basic" margin ="dense" label="Tu Email" />
            <br/>
          <TextField
          margin ="dense"
          id="outlined-multiline-static"
          label="Escribeme"
          multiline
          rows={14}
          variant="outlined"/>
            <br/>

            <Grid 
            className = {classes.buttonContents}>
              <Button
              className = {classes.buttonStyle}
              variant="contained"
              color="red">
              Cancelar
                <Delete />
              </Button>

              <Button
              variant="contained"
              color="primary">
              Enviar
                <Send />
              </Button>
              
            </Grid>

          </Grid>

      </Grid>
    </div>
  );  
} 

export default Contactme;