
import { useCheckOut } from "../hooks/useCheckOut";

function InfoUserForm() {
  const {name,setName,phoneN,setPhoneN,address,setAddress} = useCheckOut();


  return (
    <div className="flex flex-col gap-3 ">
      
      <h2 className="text-lg font-bold">المعلومات الشخصية</h2>

      <input
        type="text"
        name="name"
        value={name}
        placeholder="الاسم الكامل"
        className="w-full border p-2 rounded-lg"
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        type="text"
        name="phoneN"
        value={phoneN}
        placeholder="رقم الجوال"
        className="w-full border p-2 rounded-lg"
         onChange={(e)=>setPhoneN(e.target.value)}
      />

      <input
        type="text"
        name="address"
        value={address}
        placeholder="العنوان"
        className="w-full border p-2 rounded-lg"
         onChange={(e)=>setAddress(e.target.value)}
      />





    </div>
  );
}

export default InfoUserForm;