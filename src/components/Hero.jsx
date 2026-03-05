import { useNavigate } from "react-router-dom";


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
        <div className="btn bg-orange-600 rounded-2xl p-2 cursor-pointer text-white text-center w-40"
        onClick={()=>navigate('/products')}
        >
            تسوق الان
        </div>
        
    </div>
    </>
  )
}

export default Hero