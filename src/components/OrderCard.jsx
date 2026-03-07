function OrderCard({order_number,short_description,date}) {
  return (
    <>
      <div className="card  md:grid bg-gray-100 rounded flex  p-2 relative">
        <div className="btn-show-detiles-order absolute top-0 left-0 text-lg flex items-center py-1">
          
          <i class="fa-solid fa-eye"></i>
        </div>
        <div className="titles-row md:flex md:justify-between grid gap-2 md:mt-4 md:border-b md:border-l-0 border-l flex-2">
          <div className="title-order-number  ">
            <p className="font-blod ">رقم الطلب</p>
          </div>
          <div className="title-short-description  ">
            <p className="font-blod ">التفاصيل</p>
          </div>
          <div className="title-date ">
            <p className="font-blod ">التاريخ</p>
          </div>
        </div>
        <div className="info md:flex md:justify-between grid justify-center gap-2   flex-3">
          <div className="order-number grid ">
            <span className="text-gray-800 ">{order_number}</span>
          </div>
          <div className="short-description grid">
            <span className="text-gray-800 ">{short_description}...</span>
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
