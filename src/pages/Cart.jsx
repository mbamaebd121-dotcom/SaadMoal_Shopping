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
<div className="flex flex-col h-screen">

  {carts.length === 0 ? (
    <div className="flex flex-1 justify-center items-center gap-2">
      <p>السلة فارغة</p>
      <i className="fa-solid fa-cart-shopping text-blue-800"></i>
    </div>
  ) : (
    <div className="flex flex-col flex-1 relative overflow-hidden min-h-0">

      {/* العنوان */}
      <div className="text-center py-3 text-lg font-semibold">
        السلة
      </div>

      {/* زر إفراغ السلة */}
      <div
        className="absolute left-4 top-3 flex items-center gap-2 cursor-pointer bg-red-700 rounded-2xl py-1 px-3 text-white"
        onClick={removeAllInCart}
      >
        <p>إفراغ السلة</p>
        <i className="fa-solid fa-trash-can"></i>
      </div>

      {/* العناصر — هنا فقط السكرول */}
      <div className="flex-1 overflow-y-auto px-5 py-3 flex flex-col items-center gap-3">
        {carts.map((item) => (
          <CartItem
            key={item.id}
            {...item}
          />
        ))}
      </div>

      {/* الإجمالي + زر الدفع */}
      <div className="p-4 bg-white shadow-md">
        <div className="flex justify-between mb-3">
          <span>الإجمالي</span>
          <p>{totalCart}</p>
        </div>

        <div
          className="rounded text-center p-3 transition duration-300 bg-orange-600 hover:bg-orange-700 text-white cursor-pointer"
          onClick={goToCheckOut}
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
