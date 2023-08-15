'use client'
import axios from 'axios';
import React, { useEffect } from "react";
import { useContext ,useState } from "react";
const dataContext = React.createContext();
export const useContextElement = () => {

    return useContext(dataContext);
  };

  export default function Context({ children }) {
    const [cartProducts, setCartProducts] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    const addProductToCart = (item)=>{

        if (!cartProducts.filter((elm)=>elm.id == item.id)[0]) {

          const newItem = item
          item.attributes.quantity=1

         
           setCartProducts(pre=>[...pre,newItem])
            
        }

    }
    useEffect(() => {

      
    async () =>{
       const { data } = await axios.get('https://dream-shop-123.onrender.com/api/users/me', {
        headers: {
          Authorization:
          
            `Bearer ${localStorage && localStorage.getItem('jwtToken')}`,
        },
      });
      console.log(data)
    }
     
      
    }, [])
    
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