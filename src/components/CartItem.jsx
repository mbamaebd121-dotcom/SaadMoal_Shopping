import { useCart } from "../hooks/useCart";

function CartItem({ name, image_url, description, price, quantity, id }) {
  const { removeItemInCart, incrementQuntity, decrementQuntity } = useCart();

  return (
    <div className="bg-white w-72 md:w-full p-3 rounded-lg shadow-sm relative">

      {/* remove button */}
      <div
        className="absolute top-2 right-2 text-red-500 hover:text-red-700 cursor-pointer"
        onClick={() => removeItemInCart(id)}
      >
        <i className="fa-solid fa-trash"></i>
      </div>

      {/* product info */}
      <div className="flex items-center justify-between">
        <div className="font-semibold">{name}</div>

        <div className="rounded-full border border-gray-300 p-1">
          <img
            src={image_url}
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="text-sm text-gray-500 mt-2">
        {description}
      </div>

      {/* bottom section */}
      <div className="flex items-center justify-between mt-4">

        {/* quantity control */}
        <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">

          <button
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
            onClick={() => decrementQuntity(id)}
          >
            <i className="fa-solid fa-minus"></i>
          </button>

          <span className="px-4 font-medium">{quantity}</span>

          <button
            className="px-3 py-1 bg-green-600 text-white hover:bg-green-700"
            onClick={() => incrementQuntity(id)}
          >
            <i className="fa-solid fa-plus"></i>
          </button>

        </div>

        {/* price */}
        <div className="font-semibold text-lg">
          ${price}
        </div>

      </div>

    </div>
  );
}

export default CartItem;