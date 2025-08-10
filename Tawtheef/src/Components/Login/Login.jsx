import React, { useState } from "react";
import style from "./Login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Await, useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [isloading, setisloading] = useState(false);
  const [messageError, setmessageError] = useState("");
  let navigate = useNavigate();
  async function handleLogin(values) {
    setisloading(true);
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .catch((errr) => {
        setisloading(false);
        setmessageError(
          `${errr.response.data.errors.param}:${errr.response.data.errors.msg}`
        );
      });
    if (data.message == "success") {
      localStorage.setItem("userToken", data.token);
      navigate("/");
      setisloading(false);
    }

    console.log(data);
  }
  let validation = Yup.object({
    email: Yup.string().required("email is required").email("email is invalid"),
    password: Yup.string().required("password is required"),
  });

  let formic = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: validation,
    onSubmit: handleLogin,
  });

  return (
    <>
      <section className="w-100">
      <div className={style.contactImg}>
        
      <div className={style.layer}></div>
      </div>
      <div className={style.contactTitle}>
        <h1 className='fw-bold'>Login</h1>
      </div>
    </section>
      <div className="w-75 mx-auto  py-4 vh-100 mt-5 d-flex justify-content-space align-items-center flex-column ">
        <h1>Login Now : </h1>
        {messageError ? (
          <div className="alert alert-danger">${messageError}</div>
        ) : null}

        <form onSubmit={formic.handleSubmit} className=" w-75">
          <label htmlFor="email" className="fs-3">Email </label>
          <input
            className="form-control mb-2 py-2"
            type="email"
            name="email"
            id="email"
            value={formic.values.email}
            onChange={formic.handleChange}
          />
          {formic.errors.email && formic.touched.email ? (
            <div className="alert alert-danger ">{formic.errors.email}</div>
          ) : null}

          <label htmlFor="password" className="fs-3">Password</label>
          <input
            className="form-control mb-2 py-2"
            type="password"
            name="password"
            id="password"
            value={formic.values.password}
            onChange={formic.handleChange}
          />
          {formic.errors.password && formic.touched.password ? (
            <div className="alert alert-danger ">{formic.errors.password}</div>
          ) : null}

          {isloading ? (
            <button
              type="button"
              className="btn bg-primary p-2 text-white mt-3"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </button>
          ) : (
            <button
              type="submit"
              className="btn bg-primary px-3 py-2 text-white my-4 d-block fs-5"
            >
              Login
            </button>
          )}

          <Link to="../Register" className="text-decoration-underline ">
            are you didn't sign up
          </Link>
        </form>
      </div>
    </>
  );
}
