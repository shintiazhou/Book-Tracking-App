import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"

import App from './App';
import { initContract } from './utils/near-utils';
import reportWebVitals from './reportWebVitals';

import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';


window.nearInitPromise = initContract().then(
  ({ contract, currentUser, nearConfig, walletConnection }) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App
              contract={contract}
              currentUser={currentUser}
              nearConfig={nearConfig}
              wallet={walletConnection}
            />
          </ThemeProvider>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
);




reportWebVitals();
// -----------------------------styles-------------------------------------
const theme = createTheme({
  palette: {
    primary: {
      main: "#465461",
    },
    secondary: {
      main: "#ecf3f4",
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h1: {
      fontWeight: "700",
      fontSize: "1.7rem"
    },
    h2: {
      fontWeight: "600",
      fontSize: "1rem"
    },
    h3: {
      fontWeight: "600",
      fontSize: "1rem",
    },
    p: {
      margin: "5px 0",
      fontSize: ".9rem",
    },
    button: {
      fontWeight: "500",
      fontSize: ".7rem"
    },
    select: {
      fontWeight: "500",
      fontSize: ".7rem"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 481,
      md: 769,
      lg: 1280,
      xl: 1536
    },
  },
});