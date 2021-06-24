import { useContext } from "react";
import { ProductContext } from "../Global/productContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "./../Global/cartContext";
import { toast } from "react-toastify";
import Footer from "./../footer/footer";

const Home = () => {
  const data = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);

  

  return (
    <>
      <div className='container' style={{ paddingTop: "150px" }}>
        <div className='row product'>
          {data.Products.map((product) => {
            const handleShow = () => {
              toast.success("Added to Cart", {
                position: toast.POSITION.TOP_RIGHT,
                type: toast.TYPE.INFO,
              });
              dispatch({
                type: "ADD_TO_CART",
                id: product.id,
                product,
              });
            };
            return (
              <div key={product.id} className='col-md-3 p-2 col-6  pb-md-5'>
                <div className='card shadow h-100'>
                  {product.price < 50 ? (
                    <div className='text-left new'>
                      <span>New</span>
                    </div>
                  ) : (
                    ""
                  )}
                  {product.price > 50 ? (
                    <div className='text-left hot'>
                      <span>Hot</span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className='card-body pb-1'>
                    <img
                      src={product.image}
                      alt={product.title}
                      className='img-fluid custom-food-image'
                    />
                    <div className='pt-4'>
                      <h6 className='title text-capitalize text-left pb-1'>
                        {product.title}
                      </h6>
                      <div className='card-footer bg-white px-0 pt-2 pb-2'>
                        <div className='row px-2'>
                          <div className='col-6'>
                            <h6 className='price text-left'>
                              $ {product.price}
                            </h6>
                          </div>
                          <div
                            className='col-6 text-right cursor'
                            onClick={handleShow}
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
