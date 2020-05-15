import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './App';

const comentarios = JSON.parse(localStorage.getItem('comentarios'));

ReactDOM.hydrate(
  <AppComponent comentarios={comentarios} />,
  document.querySelector('#app')
);