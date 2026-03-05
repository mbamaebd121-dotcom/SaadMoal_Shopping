

function InputSearch({placeholder,width,hidden}) {
  return (
    <>
    <div className={`container ${hidden}  md:block`}>
            <div className={`inputSearch flex items-center   ${width} `}>
        
        <input type="text" className={`flex-1 rounded-r-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-800 py-1 px-2`}
        placeholder={placeholder} 
        />
        <div className="btn bg-blue-800 text-white rounded-l-md py-1 px-2">
            بحث
        </div>
    </div>
    </div>

    </>
  )
}

export default InputSearch