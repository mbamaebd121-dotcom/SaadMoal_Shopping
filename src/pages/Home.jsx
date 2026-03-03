import Hero from "../components/Hero";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

function Home() {
  const { products } = useProducts();
  const filterProducts = products.filter((item) => item.price > 5000);
  return (
    <>
      <div className="home flex flex-col gap-3">
        <Hero />
        <div className="section-products flex flex-col items-center gap-3">
          <div className="title flex items-center gap-3 border-b-2 pb-1">
            <p> افضل المنتجات في المول واعلاها تقييماً</p>
            <i class="fa-solid fa-heart"></i>
          </div>
          {filterProducts.length === 0 ? (
            <div className="container-empty-filterProducts flex justify-center items-center h-90">
              <p>لاتوجد منتجات حاليا !</p>
            </div>
          ) : (
            <div className="container-card flex flex-wrap justify-center gap-2 ">
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
