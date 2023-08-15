'use client'

import '../public/assets/sass/styles.scss'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-calendar/dist/Calendar.css';
config.autoAddCss = false

import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from 'react-toastify'

import { useEffect } from 'react'
import Context from '@/context/Context';






export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 120,
      easing: 'ease-out',
      once:true
    });
  }, []);
  return (
    <html lang="en" className=''>
      <head>
      
      </head>
      <body  >
        <Context>
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover

        />
           {children}</Context>
       
        </body>
    </html>
  )
}
