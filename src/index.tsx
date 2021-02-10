import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import { App } from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import axios from 'axios';

import {BrowserRouter} from "react-router-dom";


// deploy GitHub Pages,
//--в компоненте роуты писать в виде строковых констант

ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
        <BrowserRouter><App/> </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

export const apiAddress = "https://neko-back.herokuapp.com/2.0"
//axios.post(`${apiAddress}/friends`)