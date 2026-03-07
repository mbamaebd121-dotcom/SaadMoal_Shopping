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
          <div className="title font-bold text-lg">الأسئلة</div>
          <span className="h-0.5 w-10 flex bg-blue-800"></span>
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
        <div className="contact-section bg-gray-900 text-gray-100 text-sm px-3 py-10 rounded-4xl">
          <div className="title font-bold text-lg">
            خدمة العملاء
          </div>
          <span className="h-0.5 w-20 flex bg-orange-600"></span>
          <div className="info">
            <h3>للمزيد من التفاصيل يرجى التواصل مع خدمة العملاء عبر الارقام التالية :</h3>
            <div className="phoneNumber flex flex-wrap">
              <div className="container w-50 flex items-center gap-6">
                <p>777424312</p>
                <i class="fa-solid fa-square-phone text-blue-600 font-bold"></i>
              </div>
                            <div className="container w-60 flex items-center gap-6">
                <p>777426662</p>
                <i class="fa-solid fa-square-phone  text-blue-600 font-bold"></i>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
