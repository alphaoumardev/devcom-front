import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'tw-elements';

import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import {Provider}  from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store} children="">
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
