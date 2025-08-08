import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';
import PostJop from './Components/PostJop/PostJop';
import SingleJop from './Components/SingleJop/SingleJop';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';


function App() {

  let routers=createBrowserRouter([
  {path :'/' ,element:<Layout/>,children:[
    {index:true,element :<Home/>},
    {path :'About',element :<About/>},
    {path :'Contact',element :<Contact/>},
    {path :'PostJop',element :<PostJop/>},
    {path :'SingleJop',element :<SingleJop/>},
    {path :'Login',element :<Login/>},
    {path :'Register',element :<Register/>},
    {path :'*',element :<NotFound/>}
  ]}
]);
  return <> <RouterProvider router={routers}/></>
  
  
  
}

export default App;
