import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo-Login.svg";
import { authService } from "../services/authService";
import { useLocation } from "react-router-dom";
import { profileService } from "../services/profileService";

function Login() {
  const location = useLocation();

  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState("");
  const nameFromSignup = location.state?.name || null;

  const navigate = useNavigate();
  const handleLogin = async () => {

  const { data, error } = await authService.signIn(email, password)

  if (error) {
    alert(error.message)
    return
  }

  const userId = data.user.id

  // نتأكد هل يوجد profile
  const existingProfile = await profileService.getProfile(userId)

  if (!existingProfile && nameFromSignup) {
    await profileService.createProfile(userId, nameFromSignup)
  }

  navigate("/")
}


  return (
    <div className="login h-screen flex flex-col justify-center items-center relative bg-gray-100">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="w-80 md:w-110 h-120 absolute top-10 shadow-md rounded-2xl bg-white pt-0 pb-10  flex flex-col justify-center items-center gap-2"
      >
        <div className="logo-container mb-3">
          <img src={logo} alt="" className="w-50" />
        </div>
        <div className="title text-center text-2xl font-bold mb-5">
          تسجيل الدخول
        </div>
        <div className="Email text-center w-70 ">
          <input
            type="text"
            className="border p-2 w-full  focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="الايميل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password text-center w-70">
          <input
            type="password"
            className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-blue-800 px-10 py-2 text-white cursor-pointer rounded ">
          تسجيل الدخول
        </button>
        <div className="route flex gap-2 font-medium">
          <p>ليس لدي حساب ؟</p>
          <p
            className="text-blue-800 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            {" "}
            إنشاء حساب
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
