import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'aos/dist/aos.css';
import AOS, { init } from 'aos';

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


