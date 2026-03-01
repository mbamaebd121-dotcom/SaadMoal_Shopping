
function ProductsCard({image_url,name,description,price}) {
  return (
    <>
              <div className="card product w-50 bg-white shadow rounded-b-2xl">
            <div className="header-card ">
              <img src={image_url} className="w-50 h-40 " />
            </div>
            <div className="body-card flex justify-between   p-2">
              <div className="info ">
                <h1 className="font-bold text-lg">{name}</h1>
              <p className="text-gray-600">{description}</p>
              </div>
              <div className="price flex items-center">
                <p className="text-blue-800 font-bold">${price}</p>
              </div>
            </div>
            <div className="footer-card p-5">
              <div className="btnAdd cursor-pointer bg-blue-800 p-2 text-white text-center">
                إضافة منتج
              </div>
            </div>
          </div>
    </>
  )
}

export default ProductsCard