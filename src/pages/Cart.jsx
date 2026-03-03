import CartItem from "../components/CartItem";
import { useCart } from "../hooks/useCart";
import {useAuth} from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";



function Cart() {
  const {carts,removeAllInCart} = useCart();
  const {session} = useAuth();
  const navigate = useNavigate();
  const totalCart = carts.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

const goToCheckOut = ()=>{
  if(session){
    navigate('/checkOut');
  }
  else{
    alert('يرجى تسجيل الدخول للمتابعة لصفحة الدفع !')
    navigate('/login')
  }
}

  return (
    <div className="flex flex-col  h-screen">
      {carts.length === 0 ? (
        <div className="container flex justify-center h-screen mb-20 items-center gap-2">
          <p>السلة فارغة</p>
          <i class="fa-solid fa-cart-shopping text-blue-800"></i>
        </div>
      ) : (
        <div className="container flex relative flex-col gap-5">
          <div className="tiltle text-center ">السلة</div>
          <div className="removAllItemInCart absolute left-0 top-2 flex items-center gap-2 cursor-pointer bg-red-700 rounded-2xl py-1 px-2 text-white"
          onClick={()=>removeAllInCart()}
          >
            <p>إفراغ السلة</p>
            <i class="fa-solid fa-trash-can "></i>
          </div>
          <div className="container-items min-h-50 md:flex flex-col  grid justify-center gap-2">
            {carts.map((item,index)=>(
              <CartItem 
              key={index}
              name={item.name}
              image_url={item.image_url}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
              
              />

            ))}
            
          </div>
          <div className="container flex flex-col items-center gap-2">
                      <div className="total  flex justify-between w-70 md:w-full bg-white p-2">
            <span>الإجمالي</span>
            <p>{totalCart}</p>
          </div>
          <div className="btngoCheckOut rounded text-center w-70 md:w-full p-2 transition duration-500 bg-orange-600 hover:bg-orange-700 text-white cursor-pointer"
          onClick={()=>goToCheckOut()}
          >
            إكمال عملية الدفع
          </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;
