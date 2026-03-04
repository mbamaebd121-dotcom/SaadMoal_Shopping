import { useCart } from "../hooks/useCart";

function OrderSummary() {
  const {carts} = useCart();
    const totalCart = carts.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

  return (

    <>
    <div className="container flex flex-col w-80 shadow-md bg-white p-3 gap-3 md:w-120">
      <div className="title font-bold">
        ملخص الطلب
      </div>
      <div className="container-item ">
        <ul className="flex flex-col gap-2">
                  {carts.map((item,index)=>(
                    <li key={index} className="flex justify-between text-sm">
                      <p className="w-50">{item.name}</p>
                      <p className="w-10">{item.quantity}</p>
                      <p className="w-20">{item.price}</p>
                    </li>
          
        ))}

        </ul>


      </div>
              <div className="total border-t mt-10 flex items-center justify-between">
          <p>الإجمالي</p>
          <p>{totalCart}</p>
        </div>
    </div>
    </>

  );
}

export default OrderSummary;