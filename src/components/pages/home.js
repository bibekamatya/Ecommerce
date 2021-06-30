import { useContext } from "react";
import { ProductContext } from "../Global/productContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "./../Global/cartContext";
import { toast } from "react-toastify";
import Footer from "./../footer/footer";
import Navbar from "./../navbar/navbar";

const Home = () => {
  const data = useContext(ProductContext);
  const { dispatch,IsLogedIn } = useContext(CartContext);

  console.log(IsLogedIn);

  return (
    <>
      <Navbar />
      <div className='container' style={{ minHeight: "70vh" }}>
        <div className='row product'>
          {data.Products.map((product) => {
            const AddToCart = () => {
              if ((!IsLogedIn)) {
                console.log('hello')
              }
              else{
                toast.success("Added to Cart", {
                position: toast.POSITION.TOP_RIGHT,
                type: toast.TYPE.INFO,
                autoClose: 1000,
              });
              dispatch({
                type: "ADD_TO_CART",
                id: product.id,
                product,
              });
              }
            };
            return (
              <div key={product.id} className='col-md-3 p-2 col-6 pb-md-5'>
                <div
                  className='card shadow h-100'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  data-aos-once='true'
                >
                  {product.price < 50 ? (
                    <div className='text-start new'>
                      <span>New</span>
                    </div>
                  ) : (
                    ""
                  )}
                  {product.price > 50 ? (
                    <div className='text-start hot'>
                      <span>Hot</span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className='card-body pb-1'>
                    <img
                      src={product.image}
                      alt={product.title}
                      className='img-fluid custom-home-image'
                    />
                    <div className='pt-4'>
                      <h6 className='title text-capitalize text-start pb-1'>
                        {product.title}
                      </h6>
                      <p
                        className='text-muted text-start'
                        style={{ fontSize: "12px" }}
                      >
                        {product.category}
                      </p>
                      <div className='card-footer bg-white px-0 pt-2 pb-2'>
                        <div className='row px-2'>
                          <div className='col-6'>
                            <h6 className='price text-start'>
                              $ {product.price}
                            </h6>
                          </div>
                          <div
                            className='col-6 text-end cursor'
                            onClick={AddToCart}
                            // onClick={() =>
                            //   dispatch({
                            //     type: "ADD_TO_CART",
                            //     id: product.id,
                            //     product,
                            //   })
                            // }
                          >
                            <FontAwesomeIcon
                              icon={faShoppingCart}
                              className='text-success cursor'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
