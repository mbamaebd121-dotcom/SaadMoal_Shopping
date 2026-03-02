import { useState,useRef } from "react"
import { supabase } from "../supabase"
import { useNavigate } from "react-router-dom"

function ProductAddForm() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const textareaRef = useRef(null)

  // عند اختيار صورة
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (!selectedFile) return

    setFile(selectedFile)
    setPreview(URL.createObjectURL(selectedFile))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return alert("اختر صورة")

    setLoading(true)

    const fileName = `${Date.now()}-${file.name}`

    // 1️⃣ رفع الصورة
    const { error: uploadError } = await supabase.storage
      .from("bucketImageProducts")
      .upload(fileName, file)

if (uploadError) {
  console.log(uploadError)
  alert(uploadError.message)
  setLoading(false)
  return
}

    // 2️⃣ جلب الرابط
    const { data } = supabase.storage
      .from("bucketImageProducts")
      .getPublicUrl(fileName)

    const imageUrl = data.publicUrl

    // 3️⃣ إدخال المنتج في الجدول
    const { error: insertError } = await supabase
      .from("products")
      .insert([
        {
          name,
          description,
          price,
          image_url: imageUrl
        }
      ])

    if (insertError) {
      console.log(insertError)
  alert(insertError.message)
    } else {
      alert("تمت الإضافة بنجاح ✅")
      setName("")
      setDescription("")
      setPrice("")
      setFile(null)
      setPreview(null)
      navigate('/products');
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex justify-center items-start py-10 bg-gray-100">
      
      <form
        onSubmit={handleSubmit}
        className="w-80 md:w-[450px] shadow-md rounded-2xl bg-white p-6 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          إضافة منتج جديد
        </h2>

        {/* اسم المنتج */}
        <input
          type="text"
          placeholder="اسم المنتج"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        />

        {/* الوصف */}
        <textarea
          ref={textareaRef}
          placeholder="وصف المنتج"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
            textareaRef.current.style.height = "auto"
            textareaRef.current.style.height =
              textareaRef.current.scrollHeight + "px"
          }}
          className="border p-2 w-full resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        />

        {/* السعر */}
        <input
          type="number"
          placeholder="السعر"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        />

        {/* اختيار صورة */}
        <div className="border-2 border-dotted border-blue-800 p-4 rounded-lg text-center">
          <div className="grid gap-2 pb-3">
            <p>إضافة صورة للمنتج</p>
            <i className="fa-solid fa-image text-2xl text-blue-800"></i>
            <p className="text-gray-400 text-sm">PNG, SVG, JPG...</p>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full text-sm text-gray-600 
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-xl file:border-0
                       file:text-sm file:font-semibold
                       file:bg-gray-200 file:text-blue-800
                       hover:file:bg-blue-100"
          />
        </div>

        {/* معاينة الصورة */}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-48 object-cover rounded-xl border"
          />
        )}

        {/* زر الحفظ */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-800 py-2 text-white rounded hover:bg-blue-900 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "جاري الحفظ..." : "حفظ المنتج"}
        </button>

      </form>
    </div>

  )
}

export default ProductAddForm