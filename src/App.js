import React from 'react';
import './App.css';
import Wrapper from './component/Wrapper';
import theme from "./component/Themesui.js";
import ThemeProvider from '@material-ui/styles/ThemeProvider';

function App() {
  return (

    <ThemeProvider theme = {theme}>

      <Wrapper />

    </ThemeProvider>
    
  );
}

export default App;
