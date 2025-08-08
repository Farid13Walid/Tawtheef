import React from 'react'
import style from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <> 
     <div className='bg-dark p-4 d-flex justify-content-center align-items-center flex-column  '>
      
      <div className=" container row text-center text-md-start m-5">
      <div className="col-12 col-md-3 mb-4 d-flex flex-column align-items-center align-items-md-start">
          <h4 className='text-white fw-bolder mb-3'>Search Trending</h4>
          <Link to="" className={`${style.linkHover} mb-2`} >Web Design</Link>
          <Link to="" className={`${style.linkHover} mb-2`}>Graphic Design</Link>
          <Link to="" className={`${style.linkHover} mb-2`}>Web Developers</Link>
          <Link to="" className={`${style.linkHover} mb-2`}>Python</Link>
          <Link to="" className={`${style.linkHover} mb-2`}>HTML5</Link>
          <Link to="" className={`${style.linkHover} mb-2`}>CSS3</Link>
        </div>
        <div className="col-12 col-md-3 mb-4 d-flex flex-column align-items-center align-items-md-start">
          <h4 className='text-white fw-bolder mb-3'>Company</h4>
          <Link to="" className={`${style.linkHover} mb-2`}>About Us</Link>
          <Link to="" className={`${style.linkHover} mb-2`}>Career</Link>
          <Link to="" className={`${style.linkHover} mb-2`}>Blog</Link>
          <Link to="" className={`${style.linkHover} mb-2`}>Resources</Link>
        </div>
        <div className="col-12 col-md-3 mb-4 d-flex flex-column align-items-center align-items-md-start">
          <h4 className='text-white fw-bolder mb-3'>Support</h4>
          <Link to="" className={`${style.linkHover} mb-2`}>Support</Link>
          <Link to="" className={`${style.linkHover} mb-2`}>Privacy</Link>
          <Link to="" className={`${style.linkHover} mb-2`}>Terms of Service</Link>
          
        </div>
        <div className="col-12 col-md-3 mb-4 d-flex flex-column align-items-center align-items-md-start">
          <h4 className='text-white fw-bolder mb-5'>Contact Us</h4>

          <div className=''>
          <Link to="" className={` ${style.fontAwesome} px-3 py-2  rounded-circle mx-1`}><i className="fa-brands fa-facebook-f "></i></Link>
          <Link to="" className={` ${style.fontAwesome} px-3 py-2  rounded-circle mx-1`}><i className="fa-brands fa-twitter "></i></Link>
          <Link to="" className={` ${style.fontAwesome} px-3 py-2  rounded-circle mx-1`}><i className="fa-brands fa-instagram "></i></Link>
          <Link to="" className={` ${style.fontAwesome} px-3 py-2  rounded-circle mx-1`}><i className="fa-brands fa-linkedin-in "></i></Link>

          </div>

        </div>

      </div>
      
      <h3 className='text-white'>powerd by : <span className='fs-3 text-primary fw-bold '>Masters</span> </h3>
      </div>
       
  </> 
    
}