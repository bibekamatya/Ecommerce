import logo from "../login/logo.png";
import { Person, ShieldLock, PersonCircle } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
toast.configure();

const SignUp = (props) => {
  const [UFName, setUFName] = useState("");
  const [ULName, setULName] = useState("");
  const [UserName, setUserName] = useState("");
  const [UEmail, setUEmail] = useState("");
  const [UPass, setUPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const register = (e) => {
    e.preventDefault();
    setErrorMessage("");
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

        toast.success("Thanks! Your account has been succesfully created.", {
          position: toast.POSITION.TOP_RIGHT,
          type: toast.TYPE.INFO,
          pauseOnHover: false,
        });

        setTimeout(() => {
          props.history.push("/");
        }, 2000);
      })
      .catch((err) => {
        if (err.response) {
          setErrorMessage(err.response.data);
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
                <h5>React Online Shopping App</h5>
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
              <form onSubmit={register}>
                <div className='col-12 pb-3'>
                  <div className='input-group'>
                    <div className='input-group-text'>
                      <Person />
                    </div>
                    <input
                      type='text'
                      aria-label='First name'
                      id='firstname'
                      className='form-control'
                      required
                      placeholder='First Name'
                      value={UFName}
                      onChange={(e) => setUFName(e.target.value)}
                    />
                    <input
                      type='text'
                      aria-label='Last name'
                      id='lastname'
                      className='form-control'
                      required
                      placeholder='Last Name'
                      value={ULName}
                      onChange={(e) => setULName(e.target.value)}
                    />
                  </div>
                  <p className='error'>{errorMessage.firstname}</p>
                  <p className='error'>{errorMessage.lastname}</p>
                </div>
                <div className='col-12 pb-3'>
                  <div className='input-group'>
                    <div className='input-group-text'>
                      <PersonCircle />
                    </div>
                    <input
                      type='text'
                      className='form-control'
                      required
                      id='inlineFormInputGroupUsername'
                      placeholder='Username'
                      value={UserName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <p className='error'>{errorMessage.username}</p>
                </div>
                <div className='col-12 pb-3'>
                  <div className='input-group'>
                    <div className='input-group-text'>@</div>
                    <input
                      type='email'
                      className='form-control'
                      required
                      id='email'
                      placeholder='name@example.com'
                      value={UEmail}
                      onChange={(e) => setUEmail(e.target.value)}
                    />
                  </div>
                  <p className='error'>{errorMessage.email}</p>
                </div>
                <div className='col-12 pb-3'>
                  <div className='input-group'>
                    <div className='input-group-text'>
                      <ShieldLock />
                    </div>
                    <input
                      type='password'
                      className='form-control'
                      required
                      id='inlineFormInputGroupPassword'
                      placeholder='Password'
                      pattern='[A-Za-z0-9]{1,20}'
                      value={UPass}
                      onChange={(e) => setUPass(e.target.value)}
                    />
                  </div>
                  <p className='error'>{errorMessage.password}</p>
                </div>

                <button type='submit' className='btn btn-primary w-100 mt-4'>
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
