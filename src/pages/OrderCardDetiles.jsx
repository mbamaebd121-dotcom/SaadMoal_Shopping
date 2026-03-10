import { useOrders } from "../hooks/useOrders";
import { useNavigate } from "react-router-dom";

function OrderCardDetiles() {
  const { orders, activeShowOrder } = useOrders();
  const navigate = useNavigate();

  // فلترة الطلب النشط
  const activeOrder = orders.find((item) => item.id === activeShowOrder);

  // حساب الإجمالي
    const totalCart = activeOrder.cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  if (!activeOrder) {
    return (
      <>
          <div className="btn-back cursor-pointer text-blue-800"
    onClick={()=>navigate('/orders')}
    >
      <i class="fa-solid fa-arrow-right text-2xl"></i>

    </div>
            <div className="container flex justify-center items-center">
        <p>لا يوجد طلب لعرضه</p>
      </div>      
      </>
    );
  }

  return (
    <>
    <div className="btn-back cursor-pointer text-blue-800"
    onClick={()=>navigate('/orders')}
    >
      <i class="fa-solid fa-arrow-right text-2xl"></i>

    </div>
        <div className="container flex justify-center items-center">
      <div className="card shadow p-10 rounded-md bg-white">
        {/* رأس البطاقة */}
        <div className="border-b pb-2">
          <div className="orderNumber flex items-center gap-2 ">
            <p>رقم الطلب : </p>
            <p>{activeOrder.order_number}</p>
            </div>
          <div className="date flex items-center gap-2">
            <p> التاريخ : </p>
            <p>{activeOrder.date}</p>
            </div>
        </div>

        {/* تفاصيل المنتجات في السلة */}
        <div className="detilesCart py-2">
            <p className="text-center">تفاصيل المنتجات</p>
          {activeOrder.cart && activeOrder.cart.length > 0 ? (
            activeOrder.cart.map((item, index) => (
              <div key={item.id || index} className="cart-item ">
                <p>اسم المنتج: {item.name}</p>
                <p>الكمية: {item.quantity}</p>
                <p>السعر: {item.price}</p>
                
              </div>
            ))
          ) : (
            <p>لا توجد منتجات في هذا الطلب</p>
          )}
        </div>
        <div className="footer-card-total flex justify-between border-t ">
            <p>الإجمالي : </p>
            <p>{totalCart}</p>
        </div>
      </div>
    </div>
    
    </>
    

  );
}

export default OrderCardDetiles;