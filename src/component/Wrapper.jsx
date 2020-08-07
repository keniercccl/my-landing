import React, { Component } from 'react';
import Navbarr from "./Navbarr.js";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles ({
  oncancel : {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
  
})

function Wrapper() {

      const classesss = useStyle();

      return (
        <div>
          <Navbarr />

            <Typography 
            variant="h4"
            color="primary"
            align = "center"
            >
              Esto es un ejemplo
            </Typography>
                  
            <p>lorem</p>

            <Button
            classname = {classesss.oncancel}
            variant="outlined" 
            color="secondary">
              <ClearIcon/>
              Cancel
            </Button> 
            
            <Button variant="outlined" color="primary">
              <SendIcon/>
              Enviar
            </Button> 
        
            <IconButton 
            aria-label="send" >
              <SendIcon/>
            </IconButton>
            </div>
        );
    
}

export default Wrapper;