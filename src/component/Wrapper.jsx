import React from 'react';
import Navbarr from "./Navbarr.js";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Lista from './Lista.js';

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

const Wrapper = () => {

      const classesss = useStyle();

      return (
        <div>

          <Navbarr />

          <Lista />
        

            <Typography 
            variant="h2"
            color="primary"
            align = "center"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
                  
            <p>lorem</p>

            <Button
            className = {classesss.oncancel}
            variant="outlined" 
            color="secondary">
              <ClearIcon/>
              Cancelar
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