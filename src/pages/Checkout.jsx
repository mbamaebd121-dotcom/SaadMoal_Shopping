import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";

function Checkout() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        
        {/* الفورم */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <CheckoutForm />
        </div>

        {/* ملخص الطلب */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <OrderSummary />
        </div>

      </div>
    </div>
  );
}

export default Checkout;