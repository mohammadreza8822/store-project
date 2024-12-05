import { createContext, useEffect, useState } from "react";
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

export default ProductProvider;
