import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { ListePersonnage } from './personnages/ListePersonnages';
import { personnage } from './personnages/Personnages';
import { personnageB } from './personnages/Personnages';

const root = ReactDOM.createRoot(document.getElementById('root'));

const route = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [{
      path: "/tekken",
      element: <ListePersonnage liste={personnage}/>
    }, {
      path: "stf",
      element: <ListePersonnage liste={personnageB}/>
    }]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router ={route}>
      <App/>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
