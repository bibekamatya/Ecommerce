import "./login.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Person, ShieldLock } from "react-bootstrap-icons";
import { useContext } from "react";
import { UserListContext } from "./../../Global/userListProvider";
import { useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "./../../Global/cartContext";
import Navbar from "../../navbar/navbar";
toast.configure();

const LogIn = (props) => {
  const UserList = useContext(UserListContext);
  const { setIsLogedIn } = useContext(CartContext);

  const [UserName, setUserName] = useState("");
  const [UserPass, setUserPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const check = UserList.find(
      (user) => user.username === UserName && user.password === UserPass
    );
    if (check) {
      console.log("hello");
      props.history.push("/");
      toast.success(
        "You have successfully Loged In." +
          "Now you can continue your shopping",
        {
          position: toast.POSITION.TOP_LEFT,
          type: toast.TYPE.SUCCESS,
          pauseOnHover: false,
        }
      );
      setIsLogedIn(true);
    } else {
      setErrorMessage("username and password did not match ");
    }
  };
  return (
    <div className='container pt-5 mt-5'>
      <Navbar />
      <div className='row'>
        <div className='col-sm-6 col-md-4 col-md-offset-4 m-auto'>
          <div className='card shadow-lg'>
            <div className='card-body'>
              <div className='card-header pt-3'>
                <h6>Log In</h6>
              </div>
              <div className='pt-3'>
                <img className='profile-img' src={logo} alt='' />
              </div>
              <form className='mt-5 mb-3' action='' onSubmit={submitForm}>
                <div className='col-auto'>
                  <label className='visually-hidden'>Username</label>
                  <div className='input-group'>
                    <div className='input-group-text'>
                      <Person />
                    </div>
                    <input
                      type='text'
                      className='form-control'
                      id='autoSizingInputGroup'
                      placeholder='Username...'
                      value={UserName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>

                <div className='col-auto pt-3'>
                  <label className='visually-hidden'>Password</label>
                  <div className='input-group'>
                    <div className='input-group-text'>
                      <ShieldLock />
                    </div>
                    <input
                      type='password'
                      className='form-control'
                      id='inputPassword'
                      placeholder='Password...'
                      required
                      value={UserPass}
                      onChange={(e) => setUserPass(e.target.value)}
                    />
                  </div>
                </div>
                <div className=' mt-2'>
                  <p
                    className='text-danger pb-3 pt-1 error'
                    style={{ fontSize: "11px" }}
                  >
                    {errorMessage}
                  </p>
                  <button
                    className='btn btn-primary btn-block w-100'
                    type='submit'
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <Link to='#' className='text-center'>
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
