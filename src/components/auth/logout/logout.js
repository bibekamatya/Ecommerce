import logo from "../login/logo.png";
import "../auth.css";
import { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../../Global/cartContext";
toast.configure();

const LogOut = (props) => {
  const { setLogin, userName } = useContext(CartContext);

  const logout = () => {
    setLogin(false);

    setTimeout(() => {
      props.history.push("/");
    }, 1500);
  };

  return (
    <div className='container logout-content'>
      <div className='row d-flex flex-column min-vh-100 justify-content-center align-items-center'>
        <div className='col-md-5 col-lg-4 col-xl-4 col-sm-6'>
          <div className='card shadow-lg'>
            <div className='card-body'>
              <div className='card-header bg-transparent pt-3'>
                <h6>React Online Shopping App</h6>
              </div>
              <div className='pt-3'>
                <img src={logo} alt='' className='img-fluid' />
              </div>
              <form className='mt-5 mb-3' action='' onSubmit={logout}>
                <div className='col-12'>{userName}</div>
                <div className='mt-5'>
                  <button
                    className='btn btn-primary btn-block w-100'
                    type='submit'
                  >
                    Sign Out
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
