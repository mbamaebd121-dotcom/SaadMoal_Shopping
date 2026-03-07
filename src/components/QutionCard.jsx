import { useHelp } from "../hooks/useHelp";

function QutionCard({qution,answer,id,active}) {
    const {activeQution,changeActiveQution} = useHelp()
    console.log(activeQution);
    
    
  return (
    <div className="qutionCard border-b pb-2">
        <div className="container-qution-btn flex items-center gap-2">
            {/* <i class="fa-solid fa-chevron-up"></i> */}
            <div className="qution font-bold text-lg">{qution}</div>
            <i class="fa-solid fa-chevron-down text-blue-800 font-bold text-lg"
            onClick={()=>changeActiveQution(id)}
            ></i>
        </div>
        
        <div className={`answer ${active?'block':'hidden'}`}>
            {answer.map((item)=>(
                <li className="text-gray-600">{item.step}</li>
            ))}
        </div>
    </div>
  )
}
//chevron-up

export default QutionCard