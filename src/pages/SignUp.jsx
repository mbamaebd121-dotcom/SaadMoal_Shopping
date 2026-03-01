import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/logo-Login.svg'
import { authService } from "../services/authService"
import { profileService } from "../services/profileService"



function SignUp() {
 
   const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

const handleRegister = async () => {
  const { error } = await authService.signUp(email, password)

  if (error) {
    alert(error.message)
    return
  }

  // ننتقل لصفحة تسجيل الدخول بدون تمرير الباسورد
  navigate("/login", {
    state: {
      email,
      name
    }
  })
}

 
  return <div className="login h-screen flex flex-col justify-center items-center relative">
<form 
onSubmit={(e)=>{
    e.preventDefault();
    handleRegister();
}}
className="w-80 md:w-110 h-120 absolute top-10 shadow-md rounded-2xl bg-white pt-0 pb-10 flex flex-col justify-center items-center gap-2">
        <div className="logo-container mb-3">
            <img src={logo} alt=""  className="w-50"/>
        </div>
    <div className="title text-center text-2xl font-bold mb-5">
       إنشاء حساب
    </div>
    <div className="username text-center w-70">
        <input type="text" 
        className="border p-2 w-full  focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="اسم المستخدم"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
    </div>
        <div className="Email text-center w-70 ">
        <input type="text" 
        className="border p-2 w-full  focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="الايميل"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
    </div>
        <div className="password text-center w-70">
        <input type="password" 
        className="border p-2 w-full  focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="كلمة المرور"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
    </div>
    <button className="bg-blue-800 px-10 py-2 text-white cursor-pointer rounded ">إنشاء حساب</button>
    <div className="route flex gap-2 font-medium">
       <p> لدي حساب ؟</p>
       <p className="text-blue-800 cursor-pointer"
       onClick={()=>navigate('/login')}
       >تسجيل الدخول</p>
    </div>
</form>

  </div>;
}

export default SignUp;
