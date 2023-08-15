
'use client'

import useFetch from '@/hooks/useFeatch'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
    const { data, loading, error } = useFetch('banners?populate=*')
  return (
    <div className='heroEcommerce container' >
        <div className="left">
            <div className="head" data-aos="fade-up" data-aos-delay="550">
            New Wineter Item.
            </div>
            <div className="title" data-aos="fade-up" data-aos-delay="650">
            We helping client to create websites with our talented expert.
            </div>
            <div className="btns" data-aos="fade-up" data-aos-delay="850">
                <div className="btn button -icon -purple-3 text-purple-1">
                SHOP NOW

                </div>
                <div className="btn2 button -icon -outline-purple-1 text-purple-1 ">
                +

                </div>
            </div>

        </div>
        <div className="right" data-aos="fade-up" data-aos-delay="750">
            <div className="itemContainer">
                <div className="item">
                    <Image className='img' width={555} height={450} src='/assets/img/hero.png' />
                    <div className="discountContainer">
                <span>30%</span>
                <span>OFF</span>

                </div>

                </div>
               

            </div>

        </div>

    </div>
  )
}
