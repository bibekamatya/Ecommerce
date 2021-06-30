import { CartContext } from "../../Global/cartContext";
import { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import { Dash, Plus, Trash } from "react-bootstrap-icons";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./cart.css";
import empty_cart from "./empty_cart.jpeg";
import Navbar from "./../../navbar/navbar";
toast.configure();

const cartListHeading = [
  { id: 1, name: "items" },
  { id: 2, name: " name" },
  { id: 3, name: "price" },
  { id: 4, name: "quantity" },
  { id: 6, name: "Delete" },
  { id: 5, name: "total amount" },
];



const Cart = (props) => {
  const { shoppingCart, qty, totalPrice, dispatch } = useContext(CartContext);


  // const [IsLogedIn, setIsLogedIn] = useState(false);


  //don't have any server so using this method !

  const [Pay] = useState(0);
  const HandleToken = () => {
    if (Pay === 0) {
      dispatch({ type: "EMPTY" });
      props.history.push("/");
      toast.success("You have paid successfully", {
        position: toast.POSITION.BOTTOM_CENTER,
        type: toast.TYPE.INFO,
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div
        style={{ minHeight: "60vh" }}
        className='container px-md-auto mx-md-auto cart'
      >
        {shoppingCart.length > 0 ? (
          <div className='card my-cart shadow-lg pt-md-0 pt-5 pt-xl-0 '>
            <div className=''>
              <div className='pr-md-0'>
                <div className='fixTableHead'>
                  <Table responsve className='table table-striped'>
                    <thead>
                      <tr>
                        {cartListHeading.map(({ name, id }) => (
                          <th
                            key={id}
                            className='text-capitalize text-light font-weight-normal'
                          >
                            {name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {shoppingCart.map((cart) => {
                        return (
                          <tr key={cart.id}>
                            <td className='align-middle'>
                              <img
                                className='img cart-img '
                                alt={cart.title}
                                src={cart.image}
                              />
                            </td>
                            <td className='align-middle table-data-item-name w-25'>
                              {cart.title}
                            </td>
                            <td className='align-middle text-danger'>
                              $ {cart.price}
                            </td>
                            <td className='align-middle'>
                              <span
                                className='cart-icon-list cursor'
                                onClick={() =>
                                  dispatch({ type: "MINUS", id: cart.id, cart })
                                }
                              >
                                <Dash className='mb-1 plus-minus-icon ' />
                              </span>
                              <span className='mx-3'>{cart.qty}</span>
                              <span
                                className='cart-icon-list cursor'
                                onClick={() =>
                                  dispatch({ type: "PLUS", id: cart.id, cart })
                                }
                              >
                                <Plus className='mb-1 plus-minus-icon ' />
                              </span>
                            </td>
                            <td className='align-middle'>
                              <Trash
                                className='mb-1 text-danger cursor'
                                onClick={() =>
                                  dispatch({
                                    type: "DELETE",
                                    id: cart.id,
                                    cart,
                                  })
                                }
                              />
                            </td>
                            <td className='align-middle'>
                              $ {cart.qty * cart.price}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>

            {/* <div className='col-md-2 m-auto'> */}
            <div className='card-body mr-auto mb-2'>
              <div className='text-end'>
                <p>Total Quantity : {qty}</p>
                <p className='text-success'>Shipping Cost : $ 0</p>
                <p className='text-danger bold fw-bold'>
                  Total : $ {totalPrice}
                </p>
                <StripeCheckout
                  stripeKey='pk_test_51J5bT7SCgFasMdq4MnJzzDAEzil35dNbMdapFipHacYso9MIljPjwI5k0QiEepP7JUDQrKtJ031L7eQgS8McAQY9005RCqap0n'
                  token={HandleToken}
                  billingAddress
                  shippingAddress
                  amount={totalPrice * 100}
                  name='All Products'
                ></StripeCheckout>
              </div>
            </div>
          </div>
        ) : (
          <div className='pt-5 mt-5 pt-md-0 pt-lg-0 pt-xl-0 mt-md-0 mt-lg-0 mt-xl-0'>
            <img style={{ height: "300px" }} src={empty_cart} alt=''/>
            <p>Sorry currently your cart is empty...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
