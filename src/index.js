import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './pages/Layout';
import Tarea1 from './pages/Tarea1';
import Tarea2 from './pages/Tarea2';
import Tarea3 from './pages/Tarea3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> }></Route>
        <Route path="tarea1" element={ <Tarea1 /> }></Route>
        <Route path="tarea2" element={ <Tarea2 /> }></Route>
        <Route path="tarea3" element={ <Tarea3 /> }></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
