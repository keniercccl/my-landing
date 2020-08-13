import {
    Instagram,
    GitHub,
    Twitter,
    LinkedIn
} from '@material-ui/icons';
import { IconButton, Divider } from '@material-ui/core';
import React from 'react';

const Contacts = () => {

    return (

        <div>
            <IconButton 
            aria-label="GitHub"
            onClick={ () => {
              window.open('https://github.com/keniercccl', "_blank");
            }}>
              <GitHub fontSize = "large" />
            </IconButton>
            
            <IconButton
            aria-label="Twitter"
            onClick={ () => {
              window.open('https://twitter.com/ke_verdad', "_blank");
            }}>
              <Twitter fontSize = "large" />
            </IconButton>
            
            <IconButton
            aria-label="Linkedin"
            onClick={ () => {
              window.open('https://www.linkedin.com/in/kenierab/', "_blank");
            }}>
              <LinkedIn fontSize = "large"/>
            </IconButton>
            
            <IconButton
            aria-label="instagrams"
            onClick={ () => {
              window.open('https://www.instagram.com/keverdad/', "_blank");
            }}>
            
              <Instagram fontSize = "large" />
            </IconButton>
        </div>

    )
}

export default Contacts;