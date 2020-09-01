import React from 'react';
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles ({
  root : {
    backgroundColor : '#eceff1'
  },
  leftcontent : {
    alignItems : 'right' 
  }
})

function Working(props) {

  const classes = useStyles();

  return (
    <div>
      <Grid
      className = {classes.root}>
        
        <Grid>

      <Typography variant="body1" color="initial">
      Here my Work
      </Typography>
        </Grid>



      </Grid>
    </div>
  );
}

export default Working;