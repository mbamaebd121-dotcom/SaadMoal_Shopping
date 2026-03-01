import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Loading from "./Loading";
import ProductsCard from "../components/ProductsCard";

function Products() {
  const { products,loading,error } = useContext(ProductsContext);
  if(loading) return <Loading/>
  if(error) return <div className="container-errpr h-screen flex items-center justify-center">
<div className="error  flex gap-5 items-center">
  <p>خطأ في الاتصال بالانترنت</p>
  <i class="fa-solid fa-wifi animate-ping transition duration-900 text-blue-800"></i>
</div>
  </div>
  return (
    <>
      <div>Products</div>
      <div className="container-products justify-center flex flex-wrap gap-2">
        {products.map((item, index) => (
          <ProductsCard key={index}
          image_url={item.image_url}
          name={item.name}
          description={item.description}
          price={item.price}
          />

        ))}
      </div>
    </>
  );
}

export default Products;
