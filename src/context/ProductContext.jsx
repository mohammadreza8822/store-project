import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config.js";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await api.get("/products");
        setProducts(response);
      };

      fetchProducts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
}; // custom hook

const useProductDetails = (id) => {
  const products = useContext(ProductContext);
  const result = products.find((product) => product.id === id);
  return result;
};

export default ProductProvider;
export { useProducts, useProductDetails };
