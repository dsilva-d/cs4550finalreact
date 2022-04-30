import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import routesReducer from "../src/components/reducer/routesReducer";
import stationsReducer from "../src/components/reducer/stationsReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
const combinedReducers = combineReducers({routes: routesReducer, stationList: stationsReducer});
const store = createStore(combinedReducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
