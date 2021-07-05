import Navbar from "../../navbar/navbar";
import "./details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Global/cartContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const ProductDetails = (props) => {
  const { image, title, price, category, description, product } =
    props.location.state;

  const { dispatch, Login } = useContext(CartContext);

  const BuyNow = () => {
    if (Login === true) {
      dispatch({
        type: "ADD_TO_CART",
        id: product.id,
        product,
      });
      setTimeout(() => {
        props.history.push("/cart");
      }, 800);
    } else {
      setTimeout(() => {
        props.history.push("/login");
      }, 800);
    }
  };

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
      setTimeout(() => {
        props.history.push("/login");
      }, 800);
    }
  };

  return (
    <>
      <Navbar />
      <div className='container page-body details'>
        <div className='row'>
          <div className='col-md-6 mb-4 mb-md-0'>
            <div className='row product-gallery mx-1'>
              <div className='col-12 mb-0'>
                <figure className='view overlay rounded z-depth-1 main-img'>
                  <img
                    src={image}
                    alt=''
                    className='img-fluid'
                    style={{ height: "400px" }}
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className='col-md-6 text-start'>
            <h5>{title}</h5>
            <p className='mb-2 text-muted text-uppercase small'>{category}</p>
            <p>
              <span className='mr-1'>
                <strong>$ {price}</strong>
              </span>
            </p>
            <p className='pt-1 text-muted' style={{ textAlign: "justify" }}>
              {description}
            </p>
            <div className='table-responsive'>
              <table className='table table-sm table-borderless mb-0'>
                <tbody>
                  <tr>
                    <th className='ps-0 w-25'>
                      <strong className='fw-bold'>Model</strong>
                    </th>
                    <td className='text-muted'>5407X</td>
                  </tr>
                  <tr>
                    <th className='ps-0 w-25'>
                      <strong className='fw-bold'>Color</strong>
                    </th>
                    <td className='text-muted'>All Colors are Available</td>
                  </tr>
                  <tr>
                    <th className='ps-0 w-25'>
                      <strong className='fw-bold'>Delivery</strong>
                    </th>
                    <td className='text-muted'> Nepal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='pt-5'>
              <button
                type='button'
                className='btn btn-primary btn-buy-now me-2 mb-2 waves-effect text-uppercase'
                onClick={BuyNow}
              >
                Buy now
              </button>

              <button
                type='button'
                className='btn btn-primary me-1 mb-2 waves-effect btn-add-to-cart text-uppercase'
                onClick={AddToCart}
              >
                <FontAwesomeIcon icon={faShoppingCart} className='me-2' /> Add
                to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
