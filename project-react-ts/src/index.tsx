import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { themes } from "./styled-components/themes";
import { Header } from "./containers/Header/Header";
import { MainPage } from "./pages/MainPage/MainPage";
import { ShopPage } from "./pages/ShopPage/ShopPage";
import { Footer } from "./containers/Footer/Footer";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button {
    display: block;
    cursor: pointer;
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
        <GlobalStyle />

        <Header />
            <MainPage />
            <ShopPage />
        <Footer />

    </ThemeProvider>,

    document.getElementById('root') as HTMLElement
);
