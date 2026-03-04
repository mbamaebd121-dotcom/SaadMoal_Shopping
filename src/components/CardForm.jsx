import { useCheckOut } from "../hooks/useCheckOut";

const CardForm = () => {
  const {
    nameCard,
    setNameCard,
    numberCard,
    setNumberCard,
    expiry,
    setExpiry,
    cvv,
    setCvv,
  } = useCheckOut();

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-bold ">بيانات البطاقة</h2>
      <input
        type="text"
        name="name"
        placeholder="اسم حامل البطاقة"
        value={nameCard}
        onChange={(e) => setNameCard(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="number"
        placeholder="1234 5678 9012 3456"
        value={numberCard}
        onChange={(e) => setNumberCard(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <div className="flex gap-2">
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          className="w-1/2 border p-2 rounded"
        />

        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className="w-1/2 border p-2 rounded"
        />
      </div>
    </div>
  );
};

export default CardForm;
