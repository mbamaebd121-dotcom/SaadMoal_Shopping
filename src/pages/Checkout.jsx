import InfoUserForm from "../components/InfoUserForm";
import OrderSummary from "../components/OrderSummary";
import CardForm from "../components/CardForm";
import AcceptForm from "../components/AcceptForm";
import {useCheckOut} from '../hooks/useCheckOut'
function Checkout() {

  const {stepNumber,dispatch} = useCheckOut();
  
  return (
    <div className=" my-10 md:flex  md:justify-between gap-5 grid justify-center">
      <div className="container  shadow-md w-80  flex-1 flex flex-col gap-4 p-4 bg-white">
        {stepNumber === 1 && (
          <InfoUserForm/>

        )}
        {stepNumber === 2 && (
           <CardForm/>

        )}
        {stepNumber === 3 && (
          <AcceptForm/>

        )}
        
        <div className="btn-next-back flex justify-center gap-10">
          {stepNumber > 1 && (
                                <div className="back flex items-center gap-2 p-2 bg-blue-800 text-white rounded-2xl cursor-pointer"
                                onClick={()=>dispatch('back_Right')}
                                >
           
            
            <i class="fa-solid fa-arrow-right text-2xl"></i>
          </div>
          )}
          {stepNumber < 3 && (
                      <div className="next flex items-center gap-2 p-2 bg-blue-800 text-white rounded-2xl cursor-pointer"
          onClick={()=>dispatch('back_Left')}
          >
            
            <i class="fa-solid fa-arrow-left text-2xl"></i>

          </div>

          )}



        </div>
       
        {stepNumber === 3 && (
                  <div className="btn bg-orange-600 p-2 rounded-2xl hover:bg-orange-700 text-white text-center cursor-pointer">
          إتمام عملية الدفع

        </div>

        )}

        <div className="container-span flex justify-center gap-2 ">
          <span className={`${stepNumber === 1 ? 'bg-blue-800':'bg-gray-400'}  py-1 px-2 rounded-lg`}></span>
          <span className={`${stepNumber === 2 ? 'bg-blue-800':'bg-gray-400'}  py-1 px-2 rounded-lg`}></span>
          <span className={`${stepNumber === 3 ? 'bg-blue-800':'bg-gray-400'}  py-1 px-2 rounded-lg`}></span>
        </div>
      </div>
      
      
      <OrderSummary/>

    </div>
  );
}

export default Checkout;