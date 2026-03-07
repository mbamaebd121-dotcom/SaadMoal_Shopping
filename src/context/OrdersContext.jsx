/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { Orders } from "../Data/orders";

export const OrdersContext = createContext({});

const OrderContextProvider = ({children})=>{

    const [orders,setOrders] = useState(Orders);

    const value = {
        orders,
        setOrders

    }

    return (
        <OrdersContext.Provider value={value}>
            {children}
        </OrdersContext.Provider>

    );

}

export default OrderContextProvider;