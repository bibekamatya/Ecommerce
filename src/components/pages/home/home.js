import { useContext } from "react";
import { ProductContext } from "../../Global/productContext";
import Footer from "../../footer/footer";
import Navbar from "../../navbar/navbar";
import HomeChild from "./home-child";

const Home = () => {
  const data = useContext(ProductContext);

  return (
    <>
      <Navbar />
      <div className='container page-body product' style={{ minHeight: "70vh" }}>
        <div className='row'>
          {data.Products.map((product) => {
            console.log(product)

            return (
              <HomeChild
                title={product.title}
                id={product.id}
                image={product.image}
                category={product.category}
                price={product.price}
                description={product.description}
                product={product}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
