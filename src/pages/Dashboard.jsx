import { useProducts } from "../hooks/useProducts"
import { useOrders } from "../hooks/useOrders"



function Dashboard() {
const {products} = useProducts();
const {orders} = useOrders();

// filter Orders
const filterOrderPind = orders.filter(item=>item.isPind);
const filterOrderAway = orders.filter(item=>item.isAway);
const filterOrderComplate = orders.filter(item=>item.isComplate);
// filter Products
const filterProductsLaptop  = products.filter(item=>item.isComplate);


  return (
    <>
    <div className="dashboard bg-white grid p-4 gap-3">
      <div className="title text-center font-bold border-b py-1 border-gray-300">
        لوحة المعلومات
      </div>
      <div className="container-sections grid gap-5">
     {/* قسم المنتجات */}
      <div className="products-section grid gap-2">
                <div className="title font-bold">
          المنتجات
        </div>
        <div className="container-card grid gap-2 bg-gray-100 p-2 ">
                              <div className="card bg-secondary text-white flex items-center justify-between p-5 rounded-lg ">
            <p>إجمالي المنتجات</p>
            <span>{products.length}</span>
          </div>

          <div className="container-card-detailes flex flex-wrap gap-2">
                                <div className="card bg-white flex items-center justify-between md:w-60 w-full p-5 rounded-lg border-l-4 border-secondary">
            <p>لابتوب</p>
            <span>40</span>
          </div>
                    <div className="card bg-white flex items-center justify-between md:w-60 w-full p-5 rounded-lg border-l-4 border-secondary">
            <p>جوالات</p>
            <span>60</span>
          </div>
                    <div className="card bg-white flex items-center justify-between md:w-60 w-full p-5 rounded-lg border-l-4 border-secondary">
            <p>شاشات</p>
            <span>100</span>
          </div>
                              <div className="card bg-white flex items-center justify-between md:w-60 w-full p-5 rounded-lg border-l-4 border-secondary">
            <p>سماعات</p>
            <span>150</span>
          </div>
                              <div className="card bg-white flex items-center justify-between md:w-60 w-full p-5 rounded-lg border-l-4 border-secondary">
            <p>أخرى</p>
            <span>150</span>
          </div>

          </div>

        </div>

      </div>
     {/* قسم الطلبات */}
      <div className="orders-section grid gap-2">
                <div className="title font-bold">
          الطلبات
        </div>
        <div className="container-card grid gap-2 bg-gray-100  p-2">
                    <div className="card bg-accent text-white flex justify-between p-5 rounded-lg border-l-4 border-accent">
            <p>إجمالي الطلبات</p>
            <span>{orders.length}</span>
          </div>
          <div className="container-card-detailes flex flex-wrap gap-2">
                                <div className="card bg-white flex items-center justify-between md:w-60 w-full p-5 rounded-lg border-l-4 border-accent">
            <p>قيد المراجعة</p>
            <span>{filterOrderPind.length}</span>
          </div>
                    <div className="card bg-white flex items-center justify-between md:w-60 w-full p-5 rounded-lg border-l-4 border-accent">
            <p>جاري التوصيل</p>
            <span>{filterOrderAway.length}</span>
          </div>
                    <div className="card bg-white flex items-center justify-between md:w-60 w-full p-5 rounded-lg border-l-4 border-accent">
            <p>مكتملة</p>
            <span>{filterOrderComplate.length}</span>
          </div>
          </div>

        </div>

      </div>
      </div>

    </div>
    </>
  )
}

export default Dashboard