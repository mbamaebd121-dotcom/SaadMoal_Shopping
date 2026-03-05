function Orders() {
  return (
    <>
      <div className="myorder flex flex-col  gap-3">
        <div className="title-page flex justify-center ">
         <p className="font-bold"> قائمة الطلبات</p>
        </div>
        <div className="pending flex flex-col  gap-2 border-b border-gray-300 p-5">
          <div className="title bg-yellow-600 p-1 w-30 text-center rounded-2xl text-white flex items-center justify-between px-1">
            <p>قيد المراجعة</p>
            <i class="fa-solid fa-hourglass-start"></i>
          </div>
          <div className="list-orders">
            <p className="">طلب رقم 1</p>
          </div>
        </div>
        <div className="delivery-on-way flex flex-col gap-2 border-b  border-gray-300 p-5">
          <div className="title bg-orange-800 p-1 w-30 text-center rounded-2xl text-white flex items-center justify-between px-1">
            <p>في الطريق</p>
            <i class="fa-solid fa-truck-fast"></i>
          </div>
          <div className="list-orders">
            <p>طلب رقم 1</p>
          </div>
        </div>
                <div className="complate flex flex-col gap-2  p-5">
          <div className="title bg-green-800 p-1 w-30 text-center rounded-2xl text-white flex items-center justify-between px-1">
            <p>مكتملة</p>
            <i class="fa-solid fa-check"></i>          </div>
          <div className="list-orders">
            <p>طلب رقم 1</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
