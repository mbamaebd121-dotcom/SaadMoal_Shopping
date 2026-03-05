import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import InputSearch from "./InputSearch";
import { useNavigate } from "react-router-dom";


function Header() {
 
  const navigate = useNavigate();
  const {activeSideBar} = useProducts();
  const {carts} = useCart();
  return (
    <div className="header flex justify-between items-center fixed top-0 left-0 right-0 h-16  px-2 lg:px-10 shadow-md z-40 bg-white ">
              {/* <div className="btnLogin bg-blue-800 text-white rounded py-2 px-5 cursor-pointer"
        onClick={showAddForm}
        >
           +
        </div> */}
        <div className="title  font-bold md:text-2xl  flex items-center gap-2"  
        >
          <h1 >
            القيصر للإلكترونيات
          </h1>
          <i class="fa-solid fa-bag-shopping text-blue-800 text-md lg:text-4xl"></i>
        </div>
        <div className="container  w-60 hidden md:block">
          <InputSearch placeholder='ابحث هنا...' width='w-60 lg:w-80' hidden='hidden' />
        </div>

        
        <div className="cart relative p-4 cursor-pointer"
        onClick={()=>navigate('/cart')}
        >
          <i class="fa-solid fa-cart-shopping text-lg"></i>
          
          <span className={`${carts.length === 0 && 'hidden'} absolute text-md h-7 w-7 text-center top-0 shadow-2xl bottom-5 rounded-4xl text-white bg-orange-600`}>{carts.length}</span>
        </div>

          <div className="modren text-2xl cursor-pointer">
          {/* <i class="fa-regular fa-moon"></i> */}
          <i class="fa-solid fa-moon"></i>
          {/* <i class="fa-solid fa-sun"></i> */}
        
        </div>

        

        
        <div className="menu lg:hidden text-2xl cursor-pointer transition duration-700"
        onClick={activeSideBar}
        >

            <i class="fa-solid fa-bars"></i>
          
          
        </div>

    </div>
  )
}

export default Header