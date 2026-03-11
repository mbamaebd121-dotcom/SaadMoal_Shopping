import CartItem from "../components/CartItem";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";


function Cart() {
  const { carts, removeAllInCart } = useCart();
  const navigate = useNavigate();
  const totalCart = carts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="flex  flex-col h-screen">
      {carts.length === 0 ? (
        <div className="flex flex-1 justify-center items-center gap-2">
          <p>السلة فارغة</p>
          <i className="fa-solid fa-cart-shopping text-blue-800"></i>
        </div>
      ) : (
        <div className="flex flex-col md:mx-10 flex-1 relative overflow-hidden min-h-0">
          {/* العنوان */}
          <div className="text-center py-3 text-lg font-semibold">السلة</div>

          {/* زر إفراغ السلة */}
          {/* <div
            className="absolute left-4 top-3 flex items-center gap-2 cursor-pointer bg-red-700 rounded-2xl py-1 px-3 text-white"
            
          > */}
          {/* <p>إفراغ السلة</p>
            <i className="fa-solid fa-trash-can"></i> */}

          {/* العناصر — هنا فقط السكرول */}
          <div className=" overflow-y-auto  py-3 flex flex-col items-center gap-3">
            {carts.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          {/* الإجمالي + زر الدفع */}
          <div className="md:p-2 py-2 md:bg-white  flex  justify-center">
            <div className="container w-70   md:w-full  bg-white">
              <div className="flex justify-between  ">
                <span>الإجمالي</span>
                <p>{totalCart}</p>
              </div>
            </div>
          </div>
<div className="flex gap-2 justify-center mt-5">
  {/* زر الشراء */}
  <Button
    name="شراء"
    onClick={() => navigate("/checkOut")}
    variant="primary"
  />

  {/* زر إفراغ السلة */}
  <Button
    name="إفراغ السلة"
    icon="fa-solid fa-trash-can"
    onClick={() => removeAllInCart()}
    variant="danger"
  />
</div>
        </div>
      )}
    </div>
  );
}

export default Cart;
