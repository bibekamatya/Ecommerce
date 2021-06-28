import axios from "axios";
import { createContext, useState, useEffect } from "react";
import FadeLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

export const CategoryContext = createContext();

const CategoryContextProvider = (props) => {
  const [Category, setCategory] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      setCategory(response.data);

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, []);

  return (
    <div>
      {Loading ? (
        <FadeLoader
          size={100}
          color={"deepskyblue"}
          loading={Loading}
          css={css`
            position: relative;
            top: 270px !important;
            @media only screen and (max-width: 768px) {
              top: 370px !important;
            }
          `}
        />
      ) : (
        <CategoryContext.Provider value={{ Category: [...Category] }}>
          {props.children}
        </CategoryContext.Provider>
      )}
    </div>
  );
};

export default CategoryContextProvider;
