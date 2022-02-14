import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createGlobalStyle } from "styled-components";
import { Provider } from 'react-redux';
import { store } from './store/store'


const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store} >
        <Global />
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

