/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CheckOutContext = createContext({});
const CheckOutProvider = ({ children }) => {
  const navigate = useNavigate();
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
  const [name, setName] = useState("");
  const [phoneN, setPhoneN] = useState("");
  const [address, setAddress] = useState("");

  // state Card
  const [nameCard,setNameCard] = useState('');
  const [numberCard,setNumberCard] = useState('');
  const [expiry,setExpiry] = useState('');
  const [cvv,setCvv] = useState('');

  // functions

  const handlerCheckComplatePay = ()=>{
    if(
      !name.trim() || !phoneN.trim() || !address.trim() || !nameCard.trim() || 
      !numberCard.trim() || !expiry.trim() || !cvv.trim() 
    ){
      return alert('يرجئ إدخال كل المعلومات للمتابعة');

    }
    else{
      setName('')
      setPhoneN('')
      setAddress('')
      setNameCard('')
      setNumberCard('')
      setExpiry('')
      setCvv('')
      navigate('/myOrders')


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
