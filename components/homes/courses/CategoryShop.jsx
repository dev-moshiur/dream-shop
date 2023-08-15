"use client";
import Link from "next/link";
import React from "react";
import CourceCard from "../courseCards/CourseCard";
import { coursesData, catagories } from "../../../data/courses";
import { useState, useEffect } from "react";
import { productData } from "@/data/products";
import { useContextElement } from "@/context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import useFetch from "@/hooks/useFeatch";
import Loading from "@/components/Loading";
export default function CategoryShop({currentcategory}) {
 const { data, loading, error } = useFetch(`products?populate=*&filters[category][name][$eq]=${currentcategory}`)
  const {isAddedToCartProducts , addProductToCart} = useContextElement()
  const [filtered, setFiltered] = useState();
  const [category, setCategory] = useState("All Categories");
  useEffect(() => {
    if (category == "All Categories") {
      setFiltered();
    } else {
      const filteredData = coursesData.filter(
        (elm) => elm.category == category,
      );
      setFiltered(filteredData);
    }
  }, [category]);

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="row justify-center text-center">
        <div className="col-auto">
          <div className="sectionTitle ">
            <h2 className="sectionTitle__title sm:text-24">
              Explore {currentcategory}
            </h2>

            <p className="sectionTitle__text ">
              {data ? data.length + '+' : ''} unique online products available here
            </p>
          </div>
        </div>
      </div>
      {/* <div className="tabs__controls flex-wrap  pt-50 d-flex justify-center x-gap-10 js-tabs-controls">
        {catagories.map((elm, i) => (
          <div onClick={() => setCategory(elm)} key={i}>
            <button
              className={`tabs__button px-15 py-8 rounded-8 js-tabs-button ${
                category == elm ? "tabActive" : ""
              } `}
              data-tab-target=".-tab-item-2"
              type="button"
            >
              {elm}
            </button>
          </div>
        ))}
      </div> */}
     

      <div
        className="pt-60 m-auto row y-gap-30 container pl-0 pr-0"
        data-aos="fade-right"
        data-aos-offset="80"
        data-aos-duration={800}
      >
        {loading && <Loading/>}
         {data && data.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="productCard -type-1 text-center">
                <div className="productCard__image">
                  <Image
                    width={528}
                    height={528}
                    src={`${elm.attributes.imgs.data[0].attributes.url}`}
                   
                    alt="Product image"
                  />

                  <div className="productCard__controls">
                    <span className="productCard__icon">
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                    <span className="productCard__icon">
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                  </div>
                </div>

                <div className="productCard__content mt-20">
                  <div className="text-14 lh-1">
                    {elm?.attributes?.category?.data?.attributes?.name ||  'Category'}
                  </div>
                  <h4 className="text-17 fw-500 mt-15 linkCustom">
                    <Link
                      href={`/shop/${elm.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {elm.attributes.name}
                    </Link>
                  </h4>
                  <div className="text-17 fw-500 text-purple-1 mt-15">
                    ${elm.attributes.price}
                  </div>

                  <div
                    className="productCard__button d-inline-block cursor"
                    onClick={() => addProductToCart(elm)}
                  >
                    <span className="button -md -outline-purple-1 -rounded text-dark-1 mt-15">
                      {isAddedToCartProducts(elm)
                        ? "Already Added"
                        : "Add To Cart"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
       
      </div>
    </section>
  );
}
