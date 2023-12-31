









import Preloader from '@/components/common/Preloader'

import HeaderAuth from '@/components/layout/headers/HeaderAuth'
import AuthImageMove from '@/components/others/AuthImageMove'

import SignUpForm from '@/components/others/SignUpForm'

import React from 'react'
export const metadata = {
  title: 'Sign up || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}
export default function page() {
  
  return (
    <div className="main-content  ">
      <Preloader/>

        <HeaderAuth/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <section  className="form-page js-mouse-move-container" style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
                {/* <AuthImageMove/> */}
                <SignUpForm/>
            </section>
           
            
            
        </div>

    </div>
  )
}
