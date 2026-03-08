
function ButtonPrimrary({name,onclick}) {
  return (
    <>
    <div className="btn w-30 p-2 rounded-lg bg-red-500 text-white text-center"
    onClick={onclick}
    >
        {name}
    </div>
    </>
  )
}

export default ButtonPrimrary