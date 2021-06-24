import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  

  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(response.data);
    };
    fetchData();
  }, []);



  return (
    <ProductContext.Provider
      value={{ Products: [...Products] }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
