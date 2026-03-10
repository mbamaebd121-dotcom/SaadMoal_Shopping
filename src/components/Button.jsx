import React, { useState } from "react";

function Button({
  name,
  onClick,
  variant = "primary", // primary / secondary / danger
  icon = null,
  loading = false,
  className = "",
}) {
  const [isLoading, setIsLoading] = useState(false);

  // الكلاسات الأساسية لكل زر
  let baseClasses =
    "w-40 p-2 rounded-lg text-center transition duration-300 cursor-pointer flex items-center justify-center gap-2 font-medium";

  // تحديد ألوان الزر حسب النوع
  let variantClasses = "";

  switch (variant) {
    case "primary":
      variantClasses =
        "bg-accent hover:bg-accentHover text-white border-none";
      break;
    case "secondary":
      variantClasses =
        "bg-white border-2 border-secondary text-secondary hover:bg-secondary hover:text-white";
      break;
    case "danger":
      variantClasses =
        "bg-white border-2 border-denger text-denger hover:bg-denger hover:text-white";
      break;
    default:
      variantClasses =
        "bg-gray-200 hover:bg-gray-300 text-black border-none";
  }

  // زر مع أيقونة أو loading
  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={async (e) => {
        if (loading) return;
        if (onClick) {
          setIsLoading(true);
          await onClick(e);
          setIsLoading(false);
        }
      }}
      disabled={loading}
    >
      {loading ? (
        <div className="spinner-border w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <>
          {icon && <i className={icon}></i>}
          <span>{name}</span>
        </>
      )}
    </button>
  );
}

export default Button;