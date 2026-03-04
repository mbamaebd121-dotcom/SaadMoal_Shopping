import { useState } from "react";

export default function CardForm() {
  const [form, setForm] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      // أرقام فقط + حد أقصى 16 رقم
      const cleaned = value.replace(/\D/g, "").slice(0, 16);

      // إضافة مسافة كل 4 أرقام
      const formatted = cleaned.replace(/(.{4})/g, "$1 ").trim();

      setForm({ ...form, number: formatted });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <h2 className="text-lg font-bold text-center">
          بيانات البطاقة
        </h2>

        <input
          type="text"
          name="name"
          placeholder="اسم حامل البطاقة"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="number"
          placeholder="1234 5678 9012 3456"
          value={form.number}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <div className="flex gap-2">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            onChange={handleChange}
            className="w-1/2 border p-2 rounded"
          />

          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            onChange={handleChange}
            className="w-1/2 border p-2 rounded"
          />
        </div>
      </form>
  
  );
}