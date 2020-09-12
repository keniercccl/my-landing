import React from 'react';
import { makeStyles } from "@material-ui/styles";

import {
  Typography,
  Grid,
 } from "@material-ui/core";

 const useStyle = makeStyles({
   root:  {
     margin : 10,
   }
 })

function Aboutme(props) {

  const classes = useStyle();

  return (
    <div>
      <Grid container spacing={1}
      alignContent = "center"
      justify ="center"
      className={classes.root}>

      <Typography variant="body1" color="initial">
      Yo soy un ingeniero de sistemas con dominio en áreas de logística y gestión de procedimientos. 
      Simplificación de trabajo en departamentos de transporte y distribución. 
      tengo 4 años de experiencia en empresas de consumo masivo. trabajos bajo presión, buenas relaciones interpersonales. 
      Fortaleza en el desarrollo e implementación de nuevos proyectos.
      Poseo conocimientos teóricos y prácticos en programación orientada a objetos, análisis de base de datos, y programación web.
      </Typography>
        
      </Grid>
    </div>
  );
}

export default Aboutme;