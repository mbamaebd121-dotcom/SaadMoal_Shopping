import { useProducts } from "../hooks/useProducts"


function ProductDetails() {

    const {products,activeProductDetails}= useProducts();
    
  return (
    <>
    {products.filter(item=>item.id === activeProductDetails ).map((item,index)=>(
            <div key={index} className="product-details">
        <img src={item.image_url} alt={item.name} className="w-50 h-50" />
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
    </div>

    ))}

    </>
  )
}

export default ProductDetails