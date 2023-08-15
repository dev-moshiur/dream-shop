

'use client'


import useFetch from '@/hooks/useFeatch'
import Image from 'next/image'
import React from 'react'
import Loading from './Loading'

export default function TopCategories() {
    const { data, loading, error } = useFetch('categories?populate=*')
  return (
    <div className='topCategories container'>
        <h2 className="head ectionTitle__title sm:text-24">
            Explore top categories
        </h2>
        <div className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </div>
        <div className="itemContainer"   data-aos="fade-up"
              data-aos-duration={400}>
                {loading && <Loading/>}
            {data && data.map((elm,i)=>
            <div key={i} className="item">
                <div className="img">
                <Image  width={555} height={450} src={`${elm.attributes.img.data.attributes.url}`} />
                </div>
                <div className="text">

               
                <div className="name">
                    {elm.attributes.name}
                </div>
                <div className="count">
                    {elm.attributes.products.data.length}+ items
                </div> </div>
            </div>)}

        </div>
    </div>
  )
}
