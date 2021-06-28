import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [Products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`https://fakestoreapi.com/${Search}`);
  //     setProducts(response.data);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    setProducts(response.data);
  };




  return (
    <ProductContext.Provider
      value={{ Products: [...Products] }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

