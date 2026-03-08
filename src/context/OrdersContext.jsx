/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const OrdersContext = createContext({});

const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [activeShowOrder,setActiveShowOrder] = useState(null)
  const navigate = useNavigate();
  

  // functions

  //--------------//
  //---AddOrder--//
  //--------------//
const addOrder = (cartItems) => {

  const sh_desc =
    cartItems.length > 1
      ? `${cartItems[0].name} + ${cartItems.length - 1} more`
      : cartItems?.[0]?.name || "No products";

  const newOrder = {
    id: Date.now(),
    order_number: `#ORD-${String(orders.length + 2).padStart(4, "0")}`,
    short_description: sh_desc,
    date: new Date().toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
    }),
    isPind: true,
    isAway: false,
    isComplate: false,
    cart: [...cartItems]
  };
  

  setOrders((prev) => [newOrder,...prev]);
  
  

};

  //--------------//
  //---selectActiveOrder--//
  //--------------//

  const selectActiveOrder = (id)=>{
    setActiveShowOrder(id);
    navigate('/orderDetiles')
    
  }

  const value = {
    orders,
    setOrders,
    addOrder,
    activeShowOrder,
    setActiveShowOrder,
    selectActiveOrder
  };

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
};

export default OrderContextProvider;
