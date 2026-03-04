import { useState } from "react";

function InfoUserForm() {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
      
      <h2 className="text-lg font-bold">المعلومات الشخصية</h2>

      <input
        type="text"
        name="name"
        placeholder="الاسم الكامل"
        className="w-full border p-2 rounded-lg"
        onChange={handleChange}
      />

      <input
        type="text"
        name="phoneN"
        placeholder="رقم الجوال"
        className="w-full border p-2 rounded-lg"
        onChange={handleChange}
      />

      <input
        type="text"
        name="address"
        placeholder="العنوان"
        className="w-full border p-2 rounded-lg"
        onChange={handleChange}
      />





    </form>
  );
}

export default InfoUserForm;