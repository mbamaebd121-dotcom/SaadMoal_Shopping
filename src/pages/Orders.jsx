import OrderCard from "../components/OrderCard";
import { useOrders } from "../hooks/useOrders";

function Orders() {
  const { orders } = useOrders();

  const ordersPind = orders.filter(item=>item.isPind === true);
  const ordersAway = orders.filter(item=>item.isAway === true);
  const ordersComplate = orders.filter(item=>item.isComplate === true);

  return (
    <>
      <div className="order flex flex-col bg-white gap-3 py-2">
        <div className="title-page flex justify-center gap-5 items-center">
          <p className="font-bold"> قائمة الطلبات</p>
          <i class="fa-solid fa-clipboard-list text-blue-800"></i>
        </div>
        <div className="pending flex flex-col  gap-2 border-b border-gray-300 p-5">
          <div className="title bg-yellow-600 p-1 w-30 text-center rounded-2xl text-white flex items-center justify-between px-1">
            <p>قيد المراجعة</p>
            <i class="fa-solid fa-hourglass-start"></i>
          </div>
          {ordersPind.length > 0 ? (
            <div className="list-orders grid gap-2">
              {ordersPind.map((item, index) => (
                  <OrderCard
                    key={index}
                    order_number={item.order_number}
                    short_description={item.short_description}
                    date={item.date}
                  />
                ))}
            </div>
          ) : (
            <div className="container-empty-orders flex items-center justify-center bg-gray-100 p-4">
              <p>لاتوجد طلبات !</p>
            </div>
          )}
        </div>
        <div className="delivery-on-way flex flex-col gap-2 border-b  border-gray-300 p-5">
          <div className="title bg-orange-800 p-1 w-30 text-center rounded-2xl text-white flex items-center justify-between px-1">
            <p>في الطريق</p>
            <i class="fa-solid fa-truck-fast"></i>
          </div>
          {ordersAway.length > 0 ? (
            <div className="list-orders grid gap-2">
              {ordersAway.map((item, index) => (
                  <OrderCard
                    key={index}
                    order_number={item.order_number}
                    short_description={item.short_description}
                    date={item.date}
                  />
                ))}
            </div>
          ) : (
            <div className="container-empty-orders flex items-center justify-center bg-gray-100 p-4">
              <p>لاتوجد طلبات !</p>
            </div>
          )}
        </div>
        <div className="complate flex flex-col gap-2  p-5">
          <div className="title bg-green-800 p-1 w-30 text-center rounded-2xl text-white flex items-center justify-between px-1">
            <p>مكتملة</p>
            <i class="fa-solid fa-check"></i>{" "}
          </div>
          {ordersComplate.length > 0  ? (
            <div className="list-orders grid gap-2">
              {ordersComplate.map((item, index) => (
                  <OrderCard
                    key={index}
                    order_number={item.order_number}
                    short_description={item.short_description}
                    date={item.date}
                  />
                ))}
            </div>
          ) : (
            <div className="container-empty-orders flex items-center justify-center bg-gray-100 p-4">
              <p>لاتوجد طلبات !</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Orders;
