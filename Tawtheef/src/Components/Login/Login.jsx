import React, { useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Await, useNavigate,Link } from 'react-router-dom'


export default function Login() {
const [isloading,setisloading]=useState(false);
const [messageError,setmessageError]=useState('');
let navigate =useNavigate();
async function handleLogin(values){
  setisloading(true);
  let {data} =await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`,values).catch((errr)=>{
 
setisloading(false);
setmessageError(`${errr.response.data.errors.param}:${errr.response.data.errors.msg}`);
  })
  if(data.message=="sussec"){
    localStorage.setItem('userToken',data.token)
    navigate('/');
    setisloading(false);
  }

  console.log(data);
}
let validation=Yup.object({
  
  email:Yup.string().required('email is required').email('email is invalid'),
  password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,10}$/)
  
})

 let formic=useFormik({
  initialValues:{
    
    email:'',
    password:''
  },
    

  validationSchema:validation,
    onSubmit:handleLogin

 });


  return <> 
       <div className="w-75 mx-auto  py-4 vh-100 mt-5 d-flex justify-content-space align-items-center flex-column ">
        <h1>Login Now : </h1>
        {messageError?<div className="alert alert-danger">${messageError}</div>:null}
        
         <form onSubmit={formic.handleSubmit} className=' w-75'>

        

          <label htmlFor="email">Email </label>
          <input className='form-control mb-2 ' type="email" name='email' id='email' value={formic.values.email} onChange={formic.handleChange} />
          {formic.errors.email && formic.touched.email?<div className="alert alert-danger ">{formic.errors.email}</div> :null}
           
          <label htmlFor="password">Password</label>
          <input className='form-control mb-2' type="password" name='password' id='password' value={formic.values.password} onChange={formic.handleChange} />
          {formic.errors.password && formic.touched.password?<div className="alert alert-danger ">{formic.errors.password}</div> :null}
          
          
         
          {isloading?<button type='button' className='btn bg-main p-2 text-white mt-3' ><i className='fas fa-spinner fa-spin'></i></button>:
           <button disabled={!(formic.isValid && formic.dirty)} type='submit' className='btn bg-primary px-3 py-2 text-white mt-3' >Login</button>}

           <Link to="../Register" className="text-decoration-underline ms-4">are you didn't sign up</Link>

          
          

         </form>
       </div>
  </> 
    
}