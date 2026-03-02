function ProductCard({ image_url, name, description, price }) {
  return (
    <>
      <div className="card product w-60 h-90 bg-white shadow rounded-b-2xl relative">
        <div className="header-card ">
          {image_url ? (
            <img src={image_url} className="w-60 h-40 " />
          ) : (
            <div className="img-virtual bg-gray-200 h-40"></div>
          )}
        </div>
        <div className="body-card flex justify-between  p-5">
          <div className="info ">
            <h1 className="font-bold text-lg">{name}</h1>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
          <div className="price flex items-center">
            <p className="text-blue-600 font-bold">${price}</p>
          </div>
        </div>
        <div className="footer-card absolute left-0 right-0 bottom-0  border-t-2 border-gray-100 py-2 p-5 flex flex-col">
          <div className="container flex justify-between items-center pb-1">
                      <div className="container-star flex justify-start ">
            {Array(5)
              .fill()
              .map((_, i) => (
                <i class="fa-solid fa-star w-10 text-yellow-400"></i>
              ))}
              
          </div>
            <span className="self-end">4/6 *</span>
          </div>

          
          
          <div className="btnAdd cursor-pointer rounded bg-orange-600 w-10 text-white text-center">
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
