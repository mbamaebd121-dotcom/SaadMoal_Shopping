import { useProducts } from "../hooks/useProducts";
import Loading from "./Loading";
import InputSearch from "../components/InputSearch";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

function Products() {
  const { products,loading,error } = useProducts();
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
   
          <div className="products md:mx-25 rounded-md flex flex-col gap-5 bg-white">
      <div className="title font-bold border-b border-gray-200 p-4">
        قائمة المنتجات
        </div>

              <div className="fliter-products gap-3  lg:flex flex-wrap grid justify-center md:items-center px-4 py-3 lg:justify-between border-b-2 border-gray-200">
        <div className="select flex items-center gap-1">
          <p>التصنيف</p>
          <select name="" id="" className="w-50 lg:w-30 md:w-50 xl:w-60 p-1  rounded-2xl bg-gray-100 ">
            <option value="all" className="p-2">الكل</option>
            <option value="mobile" className="p-2">جوالات</option>
            <option value="laptop" className="p-2">لابتوب</option>
            <option value="tv" className="p-2">شاشات</option>
          </select>
        </div>
        <div className="search ">
          <InputSearch placeholder='ايحث عن منتج ...' width='md:w-50 lg:w-70 w-70 xl:w-100'/>

        </div>
        

     
      </div>

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
              <div className="container-products justify-center flex flex-wrap gap-2  p-4 rounded-md">
        {products.map((item, index) => (
          <ProductCard key={index}
          image_url={item.image_url}
          name={item.name}
          description={item.description}
          price={item.price}
          is_active={item.is_active}
          id={item.id}
          />

        ))}
      </div>

      )}

    </div>
      
  



    </>
  );
}

export default Products;
