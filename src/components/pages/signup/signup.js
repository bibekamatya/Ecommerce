import "./signup.css";
import logo from "../login/logo.png";
import { Person, ShieldLock } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import Navbar from "../../navbar/navbar";
import { useState, useContext } from "react";
import { AuthContext } from "../../Global/authContext";
toast.configure();

const SignUp = (props) => {
  const { dispatch, UserList } = useContext(AuthContext);

  const [UserRegName, setUserRegName] = useState("");
  const [UserRegPass, setUserRegPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setErrorMessage();
    dispatch({
      type: "REGISTER",
      userRegName: UserRegName,
      userRegPass: UserRegPass,
      UserList,
    });
    props.history.push("/");
  };

  return (
    <div className='container pt-5 mt-5'>
      <Navbar />
      <div className='row'>
        <div className='col-sm-6 col-md-4 col-md-offset-4 m-auto'>
          <div className='card shadow-lg'>
            <div className='card-body'>
              <div className='card-header pt-3'>
                <h6>Register</h6>
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
                      placeholder='name@example.com'
                      value={UserRegName}
                      onChange={(e) => setUserRegName(e.target.value)}
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
                      value={UserRegPass}
                      onChange={(e) => setUserRegPass(e.target.value)}
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
                    Sign Up
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

export default SignUp;
