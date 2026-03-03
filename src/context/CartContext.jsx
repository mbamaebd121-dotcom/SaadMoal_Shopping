/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CartContext = createContext({});
const CartContextProvider = ({ children }) => {
  //state

  const [carts, setCarts] = useState([]);

  // functions

  //-------------------//
  //----- add To Cart---//
  //-------------------//
  const handelerAddTocart = (name, image_url, description, price, id) => {
    setCarts((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [
        ...prev,
        {
          id,
          name,
          image_url,
          description,
          price,
          quantity: 1,
        },
      ];
    });
  };

    //-------------------//
  //----- Remov in The Cart ---//
  //-------------------//

  const removeItemInCart = (id)=>{
    const filterCart = carts.filter(item=>item.id !== id);
    setCarts(filterCart);
  }

  //-------------------//
  //----- + Quantity ---//
  //-------------------//
  const incrementQuntity = (id) => {
     setCarts(prev=>prev.map(item=>
      item.id === id ? {...item,quantity: item.quantity + 1}:item
     )) 

  };

  //-------------------//
  //----- - Quantity ---//
  //-------------------//
    const decrementQuntity = (id) => {
    const existingItem = carts.find(item=>item.id === id);
    if(existingItem.quantity === 1){
      return ;
    }
     setCarts(prev=>prev.map(item=>
      item.id === id  ? {...item,quantity: item.quantity - 1}:item
     )) 
  };

    //-------------------//
  //----- removeAll---//
  //-------------------//

  const removeAllInCart = ()=>{
    setCarts([]);
  }

  const value = {
    carts,
    setCarts,
    handelerAddTocart,
    removeItemInCart,
    incrementQuntity,
    decrementQuntity,
    removeAllInCart
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
