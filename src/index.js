import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { getConfig } from './config.js';
import * as nearAPI from 'near-api-js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles';


async function initContract() {

  const nearConfig = getConfig(process.env.NODE_ENV || 'testnet');

  const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();

  const near = await nearAPI.connect({ keyStore, ...nearConfig });

  const walletConnection = new nearAPI.WalletConnection(near);

  // Load in user's account data
  let currentUser;
  if (walletConnection.getAccountId()) {
    currentUser = {
      // Gets the accountId as a string
      accountId: walletConnection.getAccountId(),
      // Gets the user's token balance
      balance: (await walletConnection.account().state()).amount,
    };
  }

  const contract = await new nearAPI.Contract(
    walletConnection.account(),
    // accountId of the contract we will be loading
    // NOTE: All contracts on NEAR are deployed to an account and
    // accounts can only have one contract deployed to them. 
    nearConfig.contractName,
    {
      // View methods are read-only – they don't modify the state, but usually return some value
      viewMethods: ['getMessages'],
      // Change methods can modify the state, but you don't receive the returned value when called
      changeMethods: ['addMessage'],
      // Sender is the account ID to initialize transactions.
      // getAccountId() will return empty string if user is still unauthorized
      sender: walletConnection.getAccountId(),
    }
  );

  return { contract, currentUser, nearConfig, walletConnection };
}

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