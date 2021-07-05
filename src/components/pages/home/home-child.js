import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "./../../Global/cartContext";
import { useContext } from "react";
import "./home-child.css";

const HomeChild = (props) => {
  const { title, id, image, category, price, description, product } = props;

  const { dispatch, Login } = useContext(CartContext);

  const AddToCart = () => {
    if (Login === true) {
      toast.success("Added to Cart", {
        position: toast.POSITION.BOTTOM_RIGHT,
        type: toast.TYPE.INFO,
        autoClose: 1000,
      });
      dispatch({
        type: "ADD_TO_CART",
        id: product.id,
        product,
      });
    } else {
      alert("Please Login First...");
    }
  };
  return (
    <>
      <div
        key={id}
        className='col-md-3 p-2 pb-5 col-6 pb-md-5 pt-md-4 pt-lg-4 pt-xl-4'
      >
        <div
          className='card z-depth-1 h-100'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-once='true'
        >
          {price < 65 ? (
            <div className='text-start new'>
              <span>New</span>
            </div>
          ) : (
            ""
          )}
          {price > 65 ? (
            <div className='text-start hot'>
              <span>Hot</span>
            </div>
          ) : (
            ""
          )}
          <div className='card-body pb-1'>
            <Link
              className='cursor'
              to={{
                pathname: `/product-detail/${id}`,
                state: { image, title, price, category, description, product },
              }}
            >
              <img
                src={image}
                alt={title}
                className='img-fluid custom-home-image'
              />
            </Link>
            <div className='pt-4'>
              <h6 className='title text-capitalize text-start pb-1'>{title}</h6>
              <p className='text-muted text-start' style={{ fontSize: "12px" }}>
                {category}
              </p>
              <div className='card-footer bg-transparent px-0 pt-2 mt-auto pb-2'>
                <div className='row px-1'>
                  <div className='col-6'>
                    <h6 className='price text-start'>$ {price}</h6>
                  </div>
                  <div className='col-6 text-end cursor' onClick={AddToCart}>
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
    </>
  );
};

export default HomeChild;
