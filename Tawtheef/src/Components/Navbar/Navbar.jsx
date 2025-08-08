import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return <> 

       <nav class="navbar navbar-expand-sm navbar-light bg-primary ">

        <div class="container">

          <Link class="navbar-brand fs-3 fw-bold text-white" to="/">Tawtheef</Link>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            

            
            <ul class="navbar-nav me-auto mt-2 mt-lg-0 mx-auto ">
              <li class="nav-item">
                <Link class="nav-link fs-5 mx-2 text-white" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5 mx-2 text-white" to="About" >About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5 mx-2 text-white" to="Contact" >Contact</Link>
              </li>

            </ul>

            
            <Link class="nav-link fs-5 " to="PostJop" ><button class="btn btn-outline-light my-2 my-sm-0 me-3 py-2 px-3" type="button" >Post-jop</button></Link>
              
            <Link class="nav-link fs-5 " to="login" ><button class="btn btn-outline-light  my-2 my-sm-0 py-2 px-3" type="button" >Login</button></Link>
            
          </div>
        </div>
       </nav>
       
       
  </> 
    
}