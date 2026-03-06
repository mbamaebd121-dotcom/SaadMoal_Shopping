function About() {
  return (
    <>
      <div className="about bg-white grid justify-center md:justify-start gap-5 p-4 rounded-md lg:mx-10 ">
        <div className="info_about_section border-b border-gray-200 py-2">
          <div className="title font-bold text-lg ">من نحن ؟</div>
          <span className="w-15 h-0.5 flex bg-blue-800"></span>
          <p className="description text-md text-gray-600">
            متجر الكتروني لبيع الأجهزة الإلكترونية بأسعار مناسبة وبرسوم توصيلة
            مخفضة جداً !
          </p>
        </div>
        <div className="services_section border-b border-gray-200 py-2 ">
          <div className="title font-bold text-lg">خدماتنا ؟</div>
          <span className="w-15 h-0.5 flex bg-blue-800"></span>
          <div className="container-card bg-gray-100 md:px-4 px-2 py-5 justify-center md:justify-start flex flex-wrap gap-2 m-2 rounded-lg ">
            <div className="card bg-white h-20 px-2 shadow-md hover:shadow-lg w-70 p-4 rounded-md border-l-4 border-orange-400">
              <p className="text-md text-gray-800">
                توفير الأجهزة وعرضها في الموقع مع شرح تفصيلي لكل منتج
              </p>
            </div>
            <div className="card bg-white shadow-md w-70 h-20 px-2 flex items-center justify-center rounded-md border-l-4 border-gray-800">
              <p className="text-md text-gray-800">
                عرض المنتجات التي تحتوي على الخصومات والمنتجات الرائجة في المتجر
              </p>
            </div>
          </div>
        </div>
        <div className="advantage_section  py-2">
          <div className="title font-bold text-lg">مميزاتنا ؟</div>
          <span className="w-15 h-0.5 flex bg-blue-800"></span>

          <div className="container-card bg-gray-100 md:px-4 px-2 py-5 justify-center md:justify-start flex flex-wrap gap-2 m-2 rounded-lg  ">
            <div className="card bg-white shadow-md w-60 h-30 px-2 rounded-md border-l-4 border-red-800 flex justify-between items-center ">
              <span>طرق دفع آمنة</span>
              <i class="fa-solid fa-id-card text-2xl text-blue-800"></i>
            </div>
            <div className="card bg-white shadow-md w-60  h-30 px-2 rounded-md border-l-4 border-green-800 flex justify-between items-center">
              <span>خدمة عملاء</span>
              <i class="fa-solid fa-headset text-2xl text-blue-800"></i>
            </div>
            <div className="card bg-white shadow-md w-60  h-30 px-2 rounded-md border-l-4 border-amber-500 flex justify-between items-center">
              <span>توصيل سريع</span>
              <i class="fa-solid fa-truck-fast text-2xl text-blue-800"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
