


import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <div className='container'  style={{width:'100%',maxWidth:'120px',height:'fit-content',paddingTop:'20px',paddingBottom:'20px'}}  >
        <Image width={200} height={200} src={'/assets/img/loading.gif'} style={{width:'100%',maxWidth:'50px',height:'fit-content'}}/>


    </div>
  )
}
