import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFirestoreApp } from './firebase/dbConfig';

getFirestoreApp()

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

