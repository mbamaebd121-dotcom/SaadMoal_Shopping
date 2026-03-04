function AcceptForm() {
  return (
    <>
      <div className="container flex flex-col gap-3">
        <div className="title font-bold text-blue-800">سياسة الخصوصية</div>
        <div className="time flex flex-col gap-4">
          <div className="container ">
            <p className="font-bold">مدة توصيل الطلب ؟</p>
            <p className="text-gray-600">من 30 دقيقة إلى 45 دقيقة</p>
          </div>
          <div className="container">
            <p className="font-bold">هل يمكن الغاء الطلب ؟</p>
            <p className="text-gray-600">
              نعم , إذا لم يمر على الحجز 30 دقيقة{" "}
            </p>
          </div>
        </div>
        <div className="checkBox flex items-center gap-3">
          <p className="font-bold text-sm">موافق , على هذه السياسة</p>
          <input type="checkbox" className="" />
        </div>
      </div>
    </>
  );
}

export default AcceptForm;
