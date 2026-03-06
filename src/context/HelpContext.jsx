/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
export const HelpContext = createContext({});
import { qutions } from "../Data/qutions";


const HelpContextProvider = ({children})=>{
    
    const [Qutions,setQutions] = useState(qutions);

    // functions
    const changeActiveQution = (id)=>{
       
    setQutions((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, active: !item.active } : item,
        );
      }
    });

    }

    
    const value = {
        Qutions,
        setQutions,
        changeActiveQution

    };

    return (
        <HelpContext.Provider value={value}>
            {children}
        </HelpContext.Provider>

    )
}

export default HelpContextProvider