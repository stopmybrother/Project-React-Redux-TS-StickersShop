import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import './index.css';
import App from "./containers/App/App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {themes} from "./styled-components/themes";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button {
    display: block;
    cursor: pointer;
    outline: none;
  }

  a {
    display: block;
    cursor: pointer;
    text-decoration: none;
  }
  
  input {
    display: block;
    cursor: pointer;
    outline: none;
  }
  span {
    display: block;
  }
  img {
    display: block;
  }
`;

ReactDOM.render(
    <ThemeProvider theme = { themes }>
        <BrowserRouter>
                <Provider store = { store }>
                    <GlobalStyle />
                    <App />
                </Provider>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);