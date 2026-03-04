/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useState } from "react";

export const CheckOutContext = createContext({});
const CheckOutProvider = ({ children }) => {
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

  // state Pay away

  const [payAway,setPayAway] = useState('');

  const value = {
    name,
    setName,
    address,
    setAddress,
    phoneN,
    setPhoneN,
    payAway,
    setPayAway,
    stepNumber,
    dispatch

  };
  return (
    <CheckOutContext.Provider value={value}>
      {children}
    </CheckOutContext.Provider>
  );
};

export default CheckOutProvider;
