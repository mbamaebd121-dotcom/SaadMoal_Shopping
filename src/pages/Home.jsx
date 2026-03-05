import Hero from "../components/Hero";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

function Home() {
  const { loading, error } = useProducts();
  const { products } = useProducts();
  const filterProducts = products.filter((item) => item.price > 5000);

  return (
    <>
      <div className="home md:mx-25 flex bg-white flex-col gap-3">
        <Hero />
        <div className="section-products flex flex-col items-center p-2 gap-3">
          <div className="title flex items-center gap-3  pb-1">
            <p> افضل المنتجات في المول واعلاها تقييماً</p>
            <i class="fa-solid fa-fire text-orange-700 animate-pulse text-2xl"></i>
          </div>
          {loading && (
            <div className="loading flex justify-center items-center h-90">
              <p>جاري التحميل ...</p>
            </div>
          )}
          {error && !loading && (
            <div className="container flex justify-center items-center h-90">
                          <div className="error  flex gap-5 items-center">
              <p>خطأ في الاتصال بالانترنت</p>
              <i class="fa-solid fa-wifi animate-ping transition duration-900 text-blue-800"></i>
            </div>

            </div>

          )}
          {!error && !loading && filterProducts.length === 0 && (
            <div className="container-empty-filterProducts flex justify-center items-center h-90 ">
              <p>لاتوجد منتجات حاليا !</p>
            </div>
          )}
          {!error && !loading && filterProducts.length !== 0 && (
            <div className="container-card flex flex-wrap justify-center gap-2  rounded-md  p-4">
              {filterProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  image_url={item.image_url}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  is_active={item.is_active}
                  id={item.id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
