/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrders } from "../hooks/useOrders";
import { useCart } from "../hooks/useCart";




export const CheckOutContext = createContext({});
const CheckOutProvider = ({ children }) => {
  const navigate = useNavigate();
  const {addOrder} = useOrders();
  const {carts,setCarts} = useCart();
  

  //Reducer

  const handlerCheckOutForm = (state,action)=>{
    switch(action){
      case 'back_Right':
        return state - 1 ;
      case 'back_Left':
        return state + 1;
      default:
        return state;

    }
  }
  const [stepNumber,dispatch] = useReducer(handlerCheckOutForm,1)

  // state infoUser
  const [name, setName] = useState("محمد طالب");
  const [phoneN, setPhoneN] = useState("777543213");
  const [address, setAddress] = useState("الحوة-الشحر-حضرموت");

  // state Card
  const [nameCard,setNameCard] = useState('محمد طالب');
  const [numberCard,setNumberCard] = useState('1234 5678 9012 3456');
  const [expiry,setExpiry] = useState('MM/YY');
  const [cvv,setCvv] = useState('CVV');

  // functions

  const handlerCheckComplatePay = ()=>{
    if(
      !name.trim() || !phoneN.trim() || !address.trim() || !nameCard.trim() || 
      !numberCard.trim() || !expiry.trim() || !cvv.trim() 
    ){
      return alert('يرجئ إدخال كل المعلومات للمتابعة');

    }
    else{
      addOrder(carts);
      
      setCarts([]);
      navigate('/orders')


    }

  }

  const value = {
    name,
    setName,
    address,
    setAddress,
    phoneN,
    setPhoneN,
    nameCard,
    setNameCard,
    numberCard,
    setNumberCard,
    expiry,
    setExpiry,
    cvv,
    setCvv,
    stepNumber,
    dispatch,
    handlerCheckComplatePay

  };
  return (
    <CheckOutContext.Provider value={value}>
      {children}
    </CheckOutContext.Provider>
  );
};

export default CheckOutProvider;
