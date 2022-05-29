import React from "react";
import { Outlet } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { themes } from "../../../styled-components/themes";
import { Header } from "../../../containers/Header/Header";
import { Footer } from "../../../containers/Footer/Footer";

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

export const Layout = () => {
    return (
        <>
            <ThemeProvider theme = { themes }>
                <GlobalStyle />
                <Header />
                    <Outlet />
                <Footer />
            </ThemeProvider>
        </>
    );
};