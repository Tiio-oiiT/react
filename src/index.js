import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sect1 from './Sect1';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from "recoil";


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Sect1 />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
