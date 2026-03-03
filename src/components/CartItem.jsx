import { useCart } from "../hooks/useCart";

function CartItem({ name, image_url, description, price, quantity, id }) {
  const { removeItemInCart,incrementQuntity, decrementQuntity } = useCart();

  return (
    <div className="card-item bg-white w-70 md:w-full pt-1 p-2 relative">
      <div className="btn-remove absolute top-0 hover:text-red-600 cursor-pointer"
      onClick={()=>removeItemInCart(id)}
      >
        <i class="fa-solid fa-trash"></i>
      </div>
      <div className="info-section ">
        <div className="name-and-image h-15 flex items-center justify-between">
          <div className="name">{name}</div>
          <div className="image w-10 h-10">
            <img src={image_url} />
          </div>
        </div>

        <div className="description text-sm text-gray-500 mt-3">
          {description}
        </div>
      </div>
      <div className="buttons-and-price-quantity-section flex items-center justify-between pt-5">
        <div className="buttons flex flex-1 gap-5">
          <div
            className="puls  bg-blue-800 text-white py-1 px-2 rounded-md cursor-pointer"
            onClick={() => incrementQuntity(id)}
          >
            <i class="fa-solid fa-plus"></i>
          </div>
          <div
            className="minus bg-blue-800 text-white py-1 px-2 rounded-md cursor-pointer"
            onClick={() => decrementQuntity(id)}
          >
            <i class="fa-solid fa-minus"></i>
          </div>
        </div>
        <div className="price-quantity flex items-center justify-between w-40 md:w-50 ">
          <div className="quantity">{quantity}</div>
          <div className="price">{price}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
