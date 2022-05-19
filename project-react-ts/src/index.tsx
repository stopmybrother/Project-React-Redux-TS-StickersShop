import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { themes } from "./styled-components/themes";
import { Header } from "./containers/Header/Header";
import { Banner } from "./containers/Banner/Banner";
import { StickersMain } from "./containers/StickersMain/StickersMain";
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
        <Banner />
        <StickersMain />
        <Footer />

    </ThemeProvider>,

    document.getElementById('root') as HTMLElement
);
