"use client";



import Link from "next/link";
import React, { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SignUpForm() {

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.cpassword.value) {
      toast.error('Password and confirm password fields value doesent match', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
    } else {
      
  
    axios
  .post('https://dream-shop-123.onrender.com/api/auth/local/register', {
    username: e.target.username.value,
    email: e.target.email.value,
    password:e.target.password.value,
  })
  .then(response => {
    toast.success("Registration Successfull!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log('User profile', response.data.user);
    if (localStorage) {
      localStorage.setItem('jwtToken',response.data.jwt)
    }
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
    toast.error(error.response.data.error.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
  });
}
  };
  return (
    <div className="form-page__content lg:py-50">
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-8 col-lg-9">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
              <h3 className="text-30 lh-13">Sign Up</h3>
              <p className="mt-10">
                Already have an account?
                <Link href="/login" className="text-purple-1">
                  Log in
                </Link>
              </p>

              <form
                className="contact-form respondForm__form row y-gap-20 pt-30"
                onSubmit={handleSubmit}
              >
       
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Email address *
                  </label>
                  <input required type="email" name="email" placeholder="email" />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Username *
                  </label>
                  <input required type="text" name="username" placeholder="Name" />
                </div>
               
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Password *
                  </label>
                  <input required type="text" name="password" placeholder="password" />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Confirm Password *
                  </label>
                  <input required type="text" name="cpassword" placeholder="cpassword" />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    className="button -md -green-1 text-dark-1 fw-500 w-1/1"
                  >
                    Register
                  </button>
                </div>
              </form>

            

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
