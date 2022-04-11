import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./store/store";
import {Provider} from "react-redux";
const rerenderEntireTree=()=>{
    ReactDOM.render(
                    <BrowserRouter>
                        <Provider store={store}>
                            <App/>
                        </Provider>
                    </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
reportWebVitals();