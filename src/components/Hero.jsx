import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Hero() {
    const navigate = useNavigate();
  return (
    <>
    <div className="hero bg-blue-800  p-2 rounded-b-4xl  flex flex-col gap-2 items-center"> 
        <div className="title text-white font-bold text-2xl">
            القيصر للإلكترونيات        
         </div>
         <div className="description text-gray-300 text-center">
            <p>
                تسوق بأمان وثقة مع جودة تفوق الخيال وأسعار منافسة للجميع
            </p>
            
        </div>
  <Button
    name="تسجيل الدخول"
    onClick={navigate('/products')}
    variant="Secondary"
    icon="fa-solid fa-right-to-bracket" // أيقونة اختيارية
  />
        
    </div>
    </>
  )
}

export default Hero