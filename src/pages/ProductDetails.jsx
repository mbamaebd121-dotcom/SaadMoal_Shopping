import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard'
import Button from "../components/Button";

function ProductDetails() {

  const { products, activeProductDetails } = useProducts();
  const {handelerAddTocart} = useCart()
  const navigate = useNavigate();
  const [favorite,setFavorite] = useState(false)
  
  useEffect(() => {
    if (activeProductDetails === null) {
      navigate("/products");
    }
  }, [activeProductDetails, navigate]);

  const activeProduct = products.find(
    (item) => item.id === activeProductDetails
  );
  const sameProducts = products.filter(item=>item.category === activeProduct.category && item.id !== activeProduct.id )

  if (!activeProduct) return null;

  return (
    <div className="min-h-screen  py-10 grid justify-center md:px-5">

      <div className="">

        {/* الصور */}
        <div className="">

          <div className=" rounded-xl  flex items-center justify-center  md:p-10 relative">

            <img
              src={activeProduct.image_url}
              alt={activeProduct.name}
              className="md:w-full h-70 md:h-96 object-contain hover:scale-105 transition duration-300"
            />

          </div>

        </div>


        {/* معلومات المنتج */}
        <div className="flex flex-col justify-between">

          <div>

            {/* اسم المنتج */}
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              {activeProduct.name}
            </h1>

            {/* تقييم */}
            <div className="flex items-center gap-1 text-yellow-400 mb-4">

              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>

              

            </div>

            {/* السعر */}
            <div className="text-3xl font-bold text-secondary mb-5">
              {activeProduct.price}ريال
            </div>

            {/* الوصف */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {activeProduct.description}
            </p>


            {/* معلومات إضافية */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">

              <p className="text-sm text-gray-600">
                📦 منتج رائع
              </p>

              <p className="text-sm text-gray-600">
                🔄 30 سياسة استرجاع
              </p>

              <p className="text-sm text-gray-600">
                ⚡ توصيل سريع
              </p>

            </div>

          </div>


          {/* الأزرار */}
          <div className="flex md:gap-4 gap-0.5 items-center ">

            {/* Add To Cart */}
            <Button
            name='إضافة إلى السلة'
            variant="primary"
            icon='fa-solid fa-cart-plus'
            onClick={()=>handelerAddTocart(activeProduct.name,activeProduct.image_url,activeProduct.description,activeProduct.price,activeProduct.id)}

            />


            {/* Favorite */}
            <button
              onClick={()=>setFavorite(!favorite)}
              className={`p-2 px-5 rounded-lg  transition  cursor-pointer
              ${favorite ? "bg-red-500  text-white" : "bg-gray-100"} hover:bg-red-500 hover:text-white`}
            >
             <i class="fa-solid fa-heart"></i>
            </button>


            {/* Back */}
            <div className="btn-back rounded-lg  transition  cursor-pointer hover:bg-gray-100 p-2 "
            onClick={()=>navigate('/products')}
            >
              <i class="fa-solid fa-arrow-left text-2xl"></i>

            </div>
            

          </div>

        </div>

      </div>
      <div className="sameProducts mt-10 ">
        <div className="title text-xl">
          <h1>منتجات مشابهه</h1>
          <span className="border border-accent flex w-30 "></span>
        </div>
        <div className="container p-10">
          {sameProducts.length === 0 ? (
            <p className="text-center">لاتوجد منتجات مشابهة</p>

          ):(
            <div className="flex flex-wrap gap-2 ">
                                    {sameProducts.map((item,index)=>(
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
      </div>

    </div>
  );
}

export default ProductDetails;