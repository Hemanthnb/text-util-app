import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import NavBarRC,{TextAreaRC,JsonFileRC} from './App';
import { TextAreaRC } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NavBarRC/> */}
    <TextAreaRC/>
    {/* <JsonFileRC/> */}
  </React.StrictMode>
);

// const root1 = ReactDOM.createRoot(document.getElementById('tab'));
// root1.render(
//   <React.StrictMode>
//     <App1/>
//     <App3/>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
