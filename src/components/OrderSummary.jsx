function OrderSummary() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">ملخص الطلب</h2>

      <div className="flex justify-between">
        <span>منتج 1</span>
        <span>$50</span>
      </div>

      <div className="flex justify-between">
        <span>الشحن</span>
        <span>$5</span>
      </div>

      <hr />

      <div className="flex justify-between font-bold text-lg">
        <span>الإجمالي</span>
        <span>$55</span>
      </div>
    </div>
  );
}

export default OrderSummary;