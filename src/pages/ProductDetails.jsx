import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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

  if (!activeProduct) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-10">

        {/* الصور */}
        <div>

          <div className="bg-gray-50 rounded-xl flex items-center justify-center p-10 relative">

            {/* Badge */}
            <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
              NEW
            </span>

            <img
              src={activeProduct.image_url}
              alt={activeProduct.name}
              className="w-96 h-96 object-contain hover:scale-105 transition duration-300"
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
          <div className="flex gap-4 items-center ">

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

    </div>
  );
}

export default ProductDetails;