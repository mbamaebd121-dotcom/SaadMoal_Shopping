

function Cart() {
  return (
    <div className="flex justify-center items-center h-screen">
      {1>0 ? (
        <div className="container flex justify-center items-center gap-2">
          <p>السلة فارغة</p>
          <i class="fa-solid fa-cart-shopping text-blue-800"></i>
        </div>
        
      ):(
        <p>المنتجات</p>
      )}
    </div>
  )
}

export default Cart