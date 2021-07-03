import "./signup.css";
import logo from "../login/logo.png";
import { Person, ShieldLock, PersonCircle } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import Navbar from "./../../navbar/navbar";
toast.configure();

const SignUp = (props) => {
  const [UFName, setUFName] = useState("");
  const [ULName, setULName] = useState("");
  const [UserName, seUserName] = useState("");
  const [UEmail, setUEmail] = useState("");
  const [UPass, setUPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setErrorMessage();
    register();
    // props.history.push("/");
  };

  const [Response, setResponse] = useState([]);

  const register = (e) => {
    e.preventDefault();
    let data = {
      username: UserName,
      first_name: UFName,
      last_name: ULName,
      email: UEmail,
      password: UPass,
    };
    axios
      .post("https://truly-contacts.herokuapp.com/api/auth/register", data)
      .then((res) => {
        console.log(res.data);
        setResponse(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
  };

  return (
    <div className='container'>
      <div className='row d-flex flex-column min-vh-100 justify-content-center align-items-center'>
        <div className='col-md-6 col-lg-4 col-sm-12'>
          <div className='card pb-3 shadow-lg'>
            <div className='card-body'>
              <div className='card-header pb-3 bg-transparent'>
                <h5>Sign_Up</h5>
              </div>
            </div>
            <div className='pb-2'>
              <img
                src={logo}
                style={{ height: "100px", width: "100px" }}
                alt=''
              />
            </div>
            <div className='card-body'>
              <form>
                <div className='col-12 pb-3'>
                  <div className='input-group'>
                    <div className='input-group-text'>
                      <Person />
                    </div>
                    <input
                      type='text'
                      aria-label='First name'
                      className='form-control'
                      placeholder='First Name'
                      value={UFName}
                    />
                    <input
                      type='text'
                      aria-label='Last name'
                      className='form-control'
                      placeholder='Last Name'
                      value={ULName}
                    />
                  </div>
                </div>
                <div className='col-12 pb-3'>
                  <div className='input-group'>
                    <div className='input-group-text'>
                      <PersonCircle />
                    </div>
                    <input
                      type='text'
                      className='form-control'
                      id='inlineFormInputGroupUsername'
                      placeholder='Username'
                      value={UserName}
                    />
                  </div>
                </div>
                <div className='col-12 pb-3'>
                  <div className='input-group'>
                    <div className='input-group-text'>@</div>
                    <input
                      type='email'
                      className='form-control'
                      id='inlineFormInputGroupUsername'
                      placeholder='email'
                      value={UEmail}
                    />
                  </div>
                </div>
                <div className='col-12 pb-3'>
                  <div className='input-group'>
                    <div className='input-group-text'>
                      <ShieldLock />
                    </div>
                    <input
                      type='password'
                      className='form-control'
                      id='inlineFormInputGroupUsername'
                      placeholder='Password'
                      value={UPass}
                    />
                  </div>
                </div>

                <button
                  type='submit'
                  onClick={register}
                  className='btn btn-primary w-100 mt-4'
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
