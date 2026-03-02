import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Loading from "./Loading";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

function Products() {
  const { products,loading,error } = useContext(ProductsContext);
  const navigate = useNavigate();
  if(loading) return <Loading/>
  if(error) return <div className="container-errpr h-screen flex items-center justify-center">
<div className="error  flex gap-5 items-center">
  <p>خطأ في الاتصال بالانترنت</p>
  <i class="fa-solid fa-wifi animate-ping transition duration-900 text-blue-800"></i>
</div>
  </div>
  return (
    <>
      
      {products.length === 0 ? (
        <div className="container-empty-products h-90 flex flex-col items-center justify-center gap-2 ">
          <p> لاتوجد منتجات مضافة حاليا !</p>
          <div className="btn-goProductAddForm rounded-2xl bg-blue-800 text-white p-2 cursor-pointer" 
          onClick={()=>navigate('/productAddForm')}
          >
            إضافة منتج
          </div>
        </div>
      ):(
              <div className="container-products justify-center flex flex-wrap gap-2">
        {products.map((item, index) => (
          <ProductCard key={index}
          image_url={item.image_url}
          name={item.name}
          description={item.description}
          price={item.price}
          is_active={item.is_active}
          />

        ))}
      </div>

      )}

    </>
  );
}

export default Products;
