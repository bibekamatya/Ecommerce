import { useState } from "react";
import Footer from "../../footer/footer";
import axios from "axios";
import Navbar from "../../navbar/navbar";
import CatogoryChild from "./category-child";

const Catogory = (props) => {
  const Category = props.location.state;

  const [Product, setProduct] = useState([]);

  // useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${Category.CatName}`
    );
    setProduct(response.data);
  };
  fetchData();
  // }, []);

  return (
    <>
      <Navbar />
      <div className='container page-body' style={{ minHeight: "50vh" }}>
        <div className='row product pt-3'>
          {Product.map((product) => {
            return (
              <>
                <CatogoryChild
                  title={product.title}
                  id={product.id}
                  image={product.image}
                  category={product.category}
                  price={product.price}
                  description={product.description}
                  product={product}
                />
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catogory;
