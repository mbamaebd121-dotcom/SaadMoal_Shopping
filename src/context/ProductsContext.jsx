/* eslint-disable react-hooks/immutability */
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
    fetchProducts();
  }, []);
  useEffect(() => {
  const channel = supabase
    .channel("products-realtime")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "products",
      },
      (payload) => {
        console.log("New product:", payload.new);

        setProducts((prev) => [payload.new, ...prev]);
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}, []);

  // functions
  const fetchProducts = async () => {
  setLoading(true);

  const { data, error } = await supabase
    .from("products")
    .select()
    .order("id", { ascending: false });

  if (error) {
    setError(error.message);
  } else {
    setProducts(data);
  }

  setLoading(false);
};
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
    setError,
    fetchProducts
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
