
function Loading() {
  return (
    <div class="loading-screen ">

          <div className="spinner"></div>
      <p>جاري التحميل...</p>
  {/* <div className="flex flex-wrap gap-2">
    {Array(4).fill().map((_, i) => (
      <div key={i} className="w-50 h-60 bg-gray-200 animate-pulse rounded-xl"></div>
    ))}
  </div> */}
    </div>
  );
}


export default Loading;
