import logo from "./logo.png";
import { Link } from "react-router-dom";
import { ShieldLock } from "react-bootstrap-icons";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { CartContext } from "../../Global/cartContext";
toast.configure();

const LogIn = (props) => {
  const { setuserName, setLogin } = useContext(CartContext);

  const [UserName, setUserName] = useState("");
  const [UserPass, setUserPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = (e) => {
    e.preventDefault();
    setErrorMessage("");
    let data = {
      username: UserName,
      password: UserPass,
    };
    axios
      .post("https://truly-contacts.herokuapp.com/api/auth/login", data)
      .then((res) => {
        console.log(res.data);
        toast.success("Welcome back !", {
          position: toast.POSITION.TOP_RIGHT,
          type: toast.TYPE.INFO,
          pauseOnHover: false,
          autoClose: 2000,
        });

        setuserName(UserName);
        setLogin(true);

        setTimeout(() => {
          props.history.push("/");
        }, 1500);
      })
      .catch((err) => {
        if (err.response) {
          setErrorMessage(err.response.data);
          console.log(err.response.data.detail);
        }
      });
  };

  return (
    <div className='container'>
      <div className='row d-flex flex-column min-vh-100 justify-content-center align-items-center'>
        <div className='col-md-5 col-lg-4 col-xl-4 col-sm-6'>
          <div className='card shadow-lg'>
            <div className='card-body'>
              <div className='card-header bg-transparent pt-3'>
                <h6>React Online Shopping App</h6>
              </div>
              <div className='pt-3'>
                <img
                  src={logo}
                  style={{ height: "100px", width: "100px" }}
                  alt=''
                />
              </div>
              <form className='mt-5 mb-3' action='' onSubmit={login}>
                <div className='col-12'>
                  <label className='visually-hidden'>Username</label>
                  <div className='input-group'>
                    <div className='input-group-text'>@</div>
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

                <div className='col-12 pt-3'>
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
                  <p className='error'>{errorMessage.detail}</p>
                </div>
                <div className='mt-5'>
                  <button
                    className='btn btn-primary btn-block w-100'
                    type='submit'
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <Link to='/signup' className='text-center'>
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
