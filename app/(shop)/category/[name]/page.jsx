




import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'
import CategoryShop from '@/components/homes/courses/CategoryShop'
import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'
import React from 'react'

export default function page({ params }) {
  return (
    <div className="main-content  ">
    <Preloader/>

      <Header/>
      <div className="content-wrapper js-content-wrapper overflow-hidden">
          <PageLinks/>

          <CategoryShop  currentcategory={params.name} />

          
     
          <FooterOne/>
      </div>

  </div>
    
  )
}
