
function Hero() {
  return (
    <>
    <div className="hero bg-blue-800 p-5 mt-5 rounded-2xl flex flex-col gap-2 items-center"> 
        <div className="title text-white font-bold text-2xl">
            مركز سعاد مول للتسوق          
         </div>
         <div className="description text-gray-300 text-center">
            <p>
                تسوق بأمان وثقة مع جودة تفوق الخيال وأسعار منافسة للجميع
            </p>
            
        </div>
        <div className="btn bg-orange-600 rounded-2xl p-2 cursor-pointer text-white text-center w-40">
            تسوق الان
        </div>
        
    </div>
    </>
  )
}

export default Hero