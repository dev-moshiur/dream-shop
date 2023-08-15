"use client";
import React from "react";
import { productData } from "@/data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContextElement } from "@/context/Context";

import Image from "next/image";
import Link from "next/link";
import useFetch from "@/hooks/useFeatch";
import Loading from "../Loading";
export default function RelatedProducts({currentcategory}) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const { data, loading, error } = useFetch(`products?populate=*&filters[category][name][$eq]=${currentcategory}`)
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Related Products</h2>

              <p className="sectionTitle__text ">
              {data ? data.length + '+' : ''} unique online course list designs
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-32 pt-60 sm:pt-40">
          {loading && <Loading/> }
          {data && data.slice(0, 4).map((elm, i) => (
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
                    className="productCard__button d-inline-block"
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
      </div>
    </section>
  );
}
