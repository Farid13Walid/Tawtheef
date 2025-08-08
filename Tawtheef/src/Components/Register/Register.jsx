import React, { useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Register() {

const [isloading,setisloading]=useState(false);
const [messageError,setmessageError]=useState('');
let navigate =useNavigate();
async function handleRegister(values){
  setisloading(true);
  let {data} =await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`,values).catch((errr)=>{
 
setisloading(false);
setmessageError(`${errr.response.data.errors.param}:${errr.response.data.errors.msg}`);
  })
  if(data.message=="sussec"){
    navigate('/Login');
    setisloading(false);
  }

  console.log(data);
}
let validation=Yup.object({
  name:Yup.string().required('name is required').min(3,'name minlength is 3').max(10,'name maxlength is 10'),
  email:Yup.string().required('email is required').email('email is invalid'),
  password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,10}$/),
  rePassword:Yup.string().required('rePassword is required').oneOf([Yup.ref('password')],'password and rePassword not match'),
  phone:Yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/,'phone must be valid')
})

 let formic=useFormik({
  initialValues:{
    name:'',
    email:'',
    phone:'',
    password:'',
    rePassword:''},

  validationSchema:validation,
    onSubmit:handleRegister

 });


  return <> 
       <div className="w-75 mx-auto mt-5 py-4 vh-100 d-flex justify-content-space align-items-center flex-column">
        <h1>Register Now : </h1>
        {messageError?<div className="alert alert-danger">${messageError}</div>:null}
        
         <form onSubmit={formic.handleSubmit} className='w-75'>

          <label htmlFor="name">Name </label>
          <input className='form-control mb-2' type="text" name='name' id='name' value={formic.values.name} onChange={formic.handleChange} />
          {formic.errors.name && formic.touched.name?<div className="alert alert-danger ">{formic.errors.name}</div> :null}

          <label htmlFor="email">Email </label>
          <input className='form-control mb-2' type="email" name='email' id='email' value={formic.values.email} onChange={formic.handleChange} />
          {formic.errors.email && formic.touched.email?<div className="alert alert-danger ">{formic.errors.email}</div> :null}
           
          <label htmlFor="password">Password</label>
          <input className='form-control mb-2' type="password" name='password' id='password' value={formic.values.password} onChange={formic.handleChange} />
          {formic.errors.password && formic.touched.password?<div className="alert alert-danger ">{formic.errors.password}</div> :null}
          
          <label htmlFor="rePassword">RePassword</label>
          <input className='form-control mb-2' type="password" name='rePassword' id='rePassword' value={formic.values.rePassword} onChange={formic.handleChange} />
          {formic.errors.rePassword && formic.touched.rePassword?<div className="alert alert-danger ">{formic.errors.rePassword}</div> :null}
          
          <label htmlFor="phone">Phone</label>
          <input className='form-control mb-3' type="tel" name='phone' id='phone' value={formic.values.phone} onChange={formic.handleChange} />
          {formic.errors.phone && formic.touched.phone?<div className="alert alert-danger ">{formic.errors.phone}</div> :null}
         
          {isloading?<button type='button' className='btn bg-main p-2 text-white' ><i className='fas fa-spinner fa-spin mt-3'></i></button>:
           <button disabled={!(formic.isValid && formic.dirty)} type='submit' className='btn bg-primary px-3 py-2 text-white mt-3' >Register</button>}
          
          

         </form>
       </div>
  </> 
}