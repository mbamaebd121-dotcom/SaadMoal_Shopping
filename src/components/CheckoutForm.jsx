import { useState } from "react";

function CheckoutForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      <h2 className="text-2xl font-bold">معلومات العميل</h2>

      <input
        type="text"
        name="name"
        placeholder="الاسم الكامل"
        className="w-full border p-3 rounded-lg"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="البريد الإلكتروني"
        className="w-full border p-3 rounded-lg"
        onChange={handleChange}
      />

      <input
        type="text"
        name="address"
        placeholder="العنوان"
        className="w-full border p-3 rounded-lg"
        onChange={handleChange}
      />

      <h2 className="text-2xl font-bold">الدفع</h2>

      <input
        type="text"
        name="cardNumber"
        placeholder="رقم البطاقة"
        className="w-full border p-3 rounded-lg"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
      >
        إتمام الطلب
      </button>

    </form>
  );
}

export default CheckoutForm;