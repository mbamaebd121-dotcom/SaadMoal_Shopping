import { NavLink } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useAuth } from "../hooks/useAuth";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const { stateSidebar, activeSideBar } = useProducts();
  const { session, profile } = useAuth();
  const navigate = useNavigate();
  console.log(profile);

  const handleLogout = async () => {
    await authService.signOut();
    navigate("/login");
  };
  const closeOverly = () => {
    if (stateSidebar) {
      activeSideBar();
    }
  };

  return (
    <>
      <div
        className={`overly fixed top-0 lg:hidden ${stateSidebar ? "block" : "hidden"} h-screen w-full bg-black/40 z-50`}
        onClick={activeSideBar}
      ></div>
      <div
        className={`sidebar  bg-white flex-col
        h-screen fixed  left-0 
        top-0 lg:top-16 w-50 z-50 border-t 
        lg:translate-x-0 
        transition duration-700
        ${stateSidebar ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="container-btnClose relative mb-10 lg:hidden">
          <div
            className="btnClose absolute top-2 left-0 text-lg py-1 px-3 cursor-pointer transition duration-500 rounded-4xl hover:bg-gray-100"
            onClick={closeOverly}
            title="إغلاق"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="sidebar-header h-20 border-b  grid justify-center ">
          <div className="title  gap-2 p-5  font-bold">
            <i class="fa-solid fa-bag-shopping text-blue-800 text-lg"></i>

            <h1 className="font-bold text-black text-md">
             القيصر للإلكترونيات
            </h1>
          </div>
        </div>
        <div className="sidebar-body md:text-lg text-md h-100 py-5 flex flex-col gap-3 border-b">
                    <div className="orders mx-2" onClick={closeOverly}>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                `flex items-center justify-between p-2 rounded font-bold transition-all duration-300
     ${
       isActive
         ? "bg-blue-800 text-white"
         : "text-gray-900 bg-gray-200 hover:bg-blue-100"
     }`
              }
            >
              <div className="container flex items-center justify-between">
                <p>لوحة التحكم</p>
                <i class="fa-solid fa-gauge"></i>
              </div>
            </NavLink>
          </div>

          <div className="Home mx-2" onClick={closeOverly}>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `flex items-center justify-between p-2 rounded font-bold transition-all duration-300
     ${
       isActive
         ? "bg-blue-800 text-white"
         : "text-gray-900 bg-gray-200 hover:bg-blue-100 "
     }`
              }
            >
              <div className="container flex items-center justify-between">
                <p>الصفحة الرئيسية</p>
                <i class="fa-solid fa-house-chimney"></i>
              </div>
            </NavLink>
          </div>
          <div className="Products mx-2" onClick={closeOverly}>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `flex items-center justify-between p-2 rounded font-bold transition-all duration-300
     ${
       isActive
         ? "bg-blue-800 text-white"
         : "text-gray-900 bg-gray-200 hover:bg-blue-100"
     }`
              }
            >
              <div className="container flex items-center justify-between">
                <p>المنتجات</p>
                <i class="fa-solid fa-laptop"></i>
              </div>
            </NavLink>
          </div>

          <div className="orders mx-2 relative" onClick={closeOverly}>
            <span className="absolute left-0 bottom-7 h-7 w-7 text-white text-center bg-orange-600  rounded-4xl">5</span>
            <NavLink
              to={"/orders"}
              className={({ isActive }) =>
                `flex items-center justify-between p-2 rounded font-bold transition-all duration-300
     ${
       isActive
         ? "bg-blue-800 text-white"
         : "text-gray-900 bg-gray-200 hover:bg-blue-100"
     }`
              }
            >
              <div className="container flex items-center justify-between">
                <p>الطلبات</p>
                <i class="fa-solid fa-clipboard-list"></i>
              </div>
            </NavLink>
          </div>

          <div className="About mx-2" onClick={closeOverly}>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `flex items-center justify-between p-2 rounded font-bold transition-all duration-300
     ${
       isActive
         ? "bg-blue-800 text-white"
         : "text-gray-900 bg-gray-200 hover:bg-blue-100"
     }`
              }
            >
              <div className="container flex items-center justify-between">
                <p>من نحن</p>
                <i class="fa-solid fa-people-group"></i>
              </div>
            </NavLink>
          </div>

          <div className="Helps mx-2" onClick={closeOverly}>
            <NavLink
              to={"/help"}
              className={({ isActive }) =>
                `flex items-center justify-between p-2 rounded font-bold transition-all duration-300
     ${
       isActive
         ? "bg-blue-800 text-white"
         : "text-gray-900 bg-gray-200 hover:bg-blue-100"
     }`
              }
            >
              <div className="container flex items-center justify-between">
                <p>المساعدة</p>
                <i class="fa-solid fa-circle-question"></i>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="sidebar-footer  m-2 flex flex-col gap-7   ">
          <div className="info-user  flex flex-col gap-1">
            {!profile?.name ? (
              <h1>مرحبا, زائر</h1>
            ) : (
              <h3 className="text-blue-800 font-bold">
                <span className="text-black">مرحبا</span> , {profile?.name}
              </h3>
            )}
          </div>
          <div
            className={`btn-account m-2 ${session ? "bg-red-800 hover:bg-red-900 " : "bg-blue-800 hover:bg-blue-900 "} text-white transition duration-500 cursor-pointer p-2 rounded-lg font-bold  text-center `}
            onClick={() => {
              closeOverly();
              handleLogout();
            }}
          >
            {!session ? (
              <div className="btn-login flex items-center justify-between ">
                <p>تسجيل الدخول</p>
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
              </div>
            ) : (
              <div className="btn-signUp flex items-center justify-between">
                <p>تسجيل الخروج</p>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
