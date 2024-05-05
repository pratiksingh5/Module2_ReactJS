import { useState, useEffect } from "react";
import { Header, Product } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // console.log("yahan pe API ko fetch krenge");

    const getAllProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (response.ok) {
        // console.log("API successfull chala", response)
        const data = await response.json();
        // console.log("data", data)
        setProducts(data);
      } else {
        console.log("API fail hua", response);
      }
    };

    getAllProducts();
  }, []);

  return (
    <div className="bg-[#f1f1f1] h-screen">
      <Header />
      <div className="p-20 flex flex-wrap gap-10">
        {products && products.length ? (
          products.map((product) => (<Product key={product.id} title ={product.title} desc = {product.description} price ={product.price} img={product.image}/>))
        ) : "No Products Found"}
      </div>
    </div>
  );
};

export default App;
