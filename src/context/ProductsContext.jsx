/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { supabase } from "../supabase";

export const ProductsContext = createContext({});
const ProductsContextProvider = ({ children }) => {
  // state
  const [products,setProducts] = useState([]);
  const [loading, setLoading] = useState(true);   
  const [error, setError] = useState(null);
  const [stateSidebar, setStateSidebar] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
      const { data, error } = await supabase.from("products").select();
      if (data) {
        setProducts(data);

      }
      if (error) {
        setError(error.message)
      }
      setLoading(false)
    };

    fetchData();
  }, [products]);

  // functions

  const activeSideBar = () => {
    setStateSidebar(!stateSidebar);
  };

  const value = {
    products,
    setProducts,
    stateSidebar,
    setStateSidebar,
    activeSideBar,
    loading,
    setLoading,
    error,
    setError
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
