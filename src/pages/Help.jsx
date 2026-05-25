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

    </>
  );
}

export default Help;
