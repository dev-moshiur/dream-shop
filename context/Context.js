'use client'

import React, { useEffect } from "react";
import { useContext ,useState } from "react";
const dataContext = React.createContext();
export const useContextElement = () => {

    return useContext(dataContext);
  };

  export default function Context({ children }) {
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (item)=>{

        if (!cartProducts.filter((elm)=>elm.id == item.id)[0]) {

          const newItem = item
          item.attributes.quantity=1

         
           setCartProducts(pre=>[...pre,newItem])
            
        }

    }
    useEffect(() => {
      console.log(cartProducts)
      
    }, [cartProducts])
    
    const isAddedToCartProducts = (item)=>{
        if (cartProducts.filter((elm)=>elm.id == item.id)[0]) {
            return true
         }
         return false

    }


    const contextElement = {
        
        cartProducts,
        setCartProducts,
        addProductToCart,
        isAddedToCartProducts,


      

      };
    return (
        <dataContext.Provider value={contextElement}>{children}</dataContext.Provider>
      );
  }