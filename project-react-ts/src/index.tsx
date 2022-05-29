import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import './index.css';
import App from "./containers/App/App";

ReactDOM.render(
    <BrowserRouter>
        <Provider store = { store }>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);