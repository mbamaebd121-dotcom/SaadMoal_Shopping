import QutionCard from "../components/QutionCard";
import { useHelp } from "../hooks/useHelp";

function Help() {
  const { Qutions } = useHelp();
  return (
    <>
      <div className="help bg-white grid gap-10 p-5 lg:mx-10">
        <div className="title  font-bold flex items-center gap-3 justify-center">
          <h1>المساعدة</h1>
          <i class="fa-solid fa-circle-question text-lg text-blue-800"></i>
        </div>
        <div className="list-qutions-section">
          <div className="title font-bold text-lg">الأسئلة الشائعة !</div>
          <span className="h-0.5 w-20 flex bg-accent"></span>
          <ul className="grid gap-4 p-2">
            {Qutions.map((item, index) => (
              <QutionCard
                key={index}
                qution={item.qution}
                answer={item.answer}
                id={item.id}
                active={item.active}
              />
            ))}
          </ul>
        </div>

      </div>
              <div className="contact-section bg-blue-800 text-gray-100 text-sm px-3 py-5 rounded-b-2xl grid gap-5 lg:mx-10">

          <div className="title font-bold text-lg">
           <p>خدمة العملاء</p>
          <span className="h-0.5 w-20 flex bg-accent"></span>
          </div>
          <div className="info grid gap-5 ">
            <h3>للمزيد من التفاصيل يرجى التواصل مع خدمة العملاء عبر الارقام التالية :</h3>
            <div className="phoneNumber flex flex-wrap gap-2  ">
              <div className="container bg-white rounded-md p-1 w-50 flex items-center justify-between  border-gray-400 border transition duration-500 cursor-pointer">
                <p className="text-black">777424312</p>
                <i class="fa-solid fa-square-phone text-2xl text-accent rounded bg-white font-bold"></i>
              </div>
                            <div className="container bg-white rounded-md p-1 w-50 flex items-center justify-between border-gray-400 transition duration-500 border  cursor-pointer">
                <p className="text-black">777426662</p>
                <i class="fa-solid fa-square-phone text-2xl text-accent rounded bg-white font-bold"></i>
              </div>
              
            </div>
          </div>
        </div>
    </>
  );
}

export default Help;
