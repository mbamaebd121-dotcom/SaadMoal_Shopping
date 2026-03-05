import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-linear-to-b lg:ml-50 from-gray-900 to-gray-950  p-8 text-white border-t border-orange-600/20">
      <div className="max-w-7xl mx-auto">
        {/* القسم الرئيسي */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-b border-gray-800">
          {/* قسم الشعار */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <i className="fa-solid fa-bag-shopping text-blue-500 text-2xl"></i>
              <h2 className="text-xl font-bold   text-white bg-clip-text ">
                سعاد مول
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              وجهتك الأولى للتسوق الإلكتروني في الوطن العربي. نوفر لك أفضل المنتجات بأسعار منافسة وتجربة تسوق فريدة.
            </p>
            <div className="flex gap-3 mt-4">
              <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="fa-brands fa-facebook-f text-gray-300 hover:text-white"></i>
              </span>
              <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="fa-brands fa-x-twitter text-gray-300 hover:text-white"></i>
              </span>
              <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="fa-brands fa-instagram text-gray-300 hover:text-white"></i>
              </span>
            </div>
          </div>

          {/* قسم الروابط السريعة */}
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-orange-500"></span>
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'الصفحة الرئيسية', icon: 'fa-house-chimney', link: '/' },
                { name: 'المنتجات', icon: 'fa-burger', link: '/products' },
                { name: 'من نحن', icon: 'fa-people-group', link: '/about' },
                { name: 'المساعدة', icon: 'fa-circle-question', link: '/help' },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink to={item.link} className="flex items-center justify-between group p-2 hover:bg-gray-800/50 rounded-xl transition-all duration-300">
                    <span className="text-gray-400  transition-colors font-blod">{item.name}</span>
                    <i className={`fa-solid ${item.icon} text-gray-500 font-blod group-hover:text-blue-600 transition-colors`}></i>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* قسم المساعدة والدعم */}
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              مساعدة ودعم
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-orange-500"></span>
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'سياسة الخصوصية', icon: 'fa-shield-halved',path:'/' },
                { name: 'الشروط والأحكام', icon: 'fa-file-contract',path:'/' },
                { name: 'طرق الدفع', icon: 'fa-credit-card',path:'/' },
                { name: 'الشحن والتوصيل', icon: 'fa-truck',path:'/' },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink to={item.path} className="flex items-center gap-3 text-gray-400 hover:bg-gray-900 hover:text-blue-600 duration-500 transition-colors p-2">
                    <i className={`fa-solid ${item.icon}  w-5 font-blod`}></i>
                    <span className="font-blod">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* قسم التواصل */}
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              تواصل معنا
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-orange-500"></span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <i className="fa-solid fa-location-dot text-blue-600 w-5"></i>
                <span>الشحر - برع السدة </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <i className="fa-solid fa-phone text-blue-600 w-5"></i>
                <span dir="ltr">+967 777 777 777</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <i className="fa-solid fa-envelope text-blue-600 w-5"></i>
                <span>info@soadmall.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <i className="fa-regular fa-clock text-blue-600 w-5"></i>
                <span>السبت - الخميس: 9ص - 10م</span>
              </div>
            </div>
          </div>
        </div>

        {/* قسم النشرة البريدية */}
        <div className="py-8 border-b border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <i className="fa-regular fa-envelope text-blue-600 text-2xl"></i>
              <div>
                <h3 className="font-bold">اشترك في النشرة البريدية</h3>
                <p className="text-sm text-gray-400">احصل على آخر العروض والتخفيضات</p>
              </div>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني"
                className="px-4 py-2 bg-gray-800 text-white rounded-r-lg w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-l-lg transition-colors font-bold">
                اشتراك
              </button>
            </div>
          </div>
        </div>

        {/* قسم المطور وحقوق النشر */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-laptop-code text-2xl text-orange-500 animate-pulse"></i>
            <span className="text-gray-300">
              تصميم وبرمجة 
              <span className="font-bold text-orange-500 mr-1">المطور بامعيبد</span>
            </span>
          </div>
          <div className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fa-regular fa-copyright"></i>
            <span>جميع الحقوق محفوظة لسعاد مول 2026</span>
          </div>
          <div className="flex gap-4 text-gray-400">
            <span className="hover:text-blue-500 transition-colors cursor-pointer">خريطة الموقع</span>
            <span className="hover:text-blue-500 transition-colors cursor-pointer">الدعم الفني</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;