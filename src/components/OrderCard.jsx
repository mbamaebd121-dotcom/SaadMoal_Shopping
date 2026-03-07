function OrderCard({order_number,short_description,date}) {
  return (
    <>
      <div className="card  grid bg-gray-100 rounded  p-2">
        <div className="titles-row flex justify-between w-full border-b">
          <div className="title-order-number">
            <p className="font-blod text-lg">رقم الطلب</p>
          </div>
          <div className="title-short-description">
            <p className="font-blod text-lg">وصف مختصر</p>
          </div>
          <div className="title-date">
            <p className="font-blod text-lg">التاريخ</p>
          </div>
        </div>
        <div className="info flex justify-between">
          <div className="order-number grid ">
            <span className="text-gray-800 ">{order_number}</span>
          </div>
          <div className="short-description grid">
            <span className="text-gray-800 ">{short_description}</span>
          </div>
          <div className="date grid">
            <span className="text-gray-800 ">{date}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
