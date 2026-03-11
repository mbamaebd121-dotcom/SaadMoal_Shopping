import { useProducts } from "../hooks/useProducts";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {

  const { products, activeProductDetails } = useProducts();
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

              <span className="text-gray-500 text-sm ml-2">(120 reviews)</span>

            </div>

            {/* السعر */}
            <div className="text-3xl font-bold text-green-600 mb-5">
              ${activeProduct.price}
            </div>

            {/* الوصف */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {activeProduct.description}
            </p>


            {/* معلومات إضافية */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">

              <p className="text-sm text-gray-600">
                📦 Free shipping worldwide
              </p>

              <p className="text-sm text-gray-600">
                🔄 30 day return guarantee
              </p>

              <p className="text-sm text-gray-600">
                ⚡ Fast delivery
              </p>

            </div>

          </div>


          {/* الأزرار */}
          <div className="flex gap-4">

            {/* Add To Cart */}
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md transition transform hover:scale-105">
              🛒 Add To Cart
            </button>


            {/* Favorite */}
            <button
              onClick={()=>setFavorite(!favorite)}
              className={`px-5 rounded-lg border transition 
              ${favorite ? "bg-red-500 text-white" : "bg-white"}`}
            >
              ❤️
            </button>


            {/* Back */}
            <button
              onClick={()=>navigate("/products")}
              className="border px-5 rounded-lg hover:bg-gray-100 transition"
            >
              ⬅
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;