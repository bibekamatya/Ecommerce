import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./logo.png";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./../Global/cartContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CategoryContext } from "../Global/categoryContext";
import Avatar from "react-avatar";
import { CaretRight } from "react-bootstrap-icons";
const Navbar = (props) => {
  const { item, userName, Login } = useContext(CartContext);
  const data = useContext(CategoryContext);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <div>
      <nav
        className={
          scroll
            ? "navbar navbar-expand-lg fixed-top navbar-light bg-light z-depth-1 px-1 px-md-5 px-lg-5 px-xl-5 navbar-after-scroll"
            : "navbar navbar-expand-lg fixed-top navbar-light bg-light z-depth-1 px-1 px-md-5 px-lg-5 px-xl-5 navbar-before-scroll"
        }
      >
        <NavLink className='navbar-brand' to='/'>
          <img
            src={logo}
            alt='logo'
            className={scroll ? "logo-after-scroll" : "logo-before-scroll"}
          />
        </NavLink>

        <ul className='navbar-nav ms-auto me-4 d-block d-lg-none '>
          <Link to='/cart'>
            <li className='nav-item'>
              <span
                className='nav-link position-relative'
                data-bs-toggle='collapse'
                data-bs-target='.navbar-collapse.show'
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className='text-success cart-basket-icon'
                />
                <div id='cart'>
                  <span
                    className={
                      item === 0
                        ? "hide-price"
                        : "position-absolute my-badge translate-middle badge rounded-pill bg-primary wf-light"
                    }
                  >
                    {item}
                  </span>
                </div>
              </span>
            </li>
          </Link>
        </ul>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto me-auto'>
            <Link to='/'>
              <li className='nav-item active mx-md-3 mx-auto'>
                <span
                  className='nav-link'
                  data-bs-toggle='collapse'
                  data-bs-target='.navbar-collapse.show'
                >
                  Home <span className='sr-only'>(current)</span>
                </span>
              </li>
            </Link>
            <Link to='/contact'>
              <li className='nav-item mx-md-3 mx-auto'>
                <span
                  className='nav-link'
                  data-bs-toggle='collapse'
                  data-bs-target='.navbar-collapse.show'
                >
                  Contact
                </span>
              </li>
            </Link>
            <Link to='/about'>
              <li className='nav-item mx-md-3 mx-auto'>
                <span
                  className='nav-link'
                  data-bs-toggle='collapse'
                  data-bs-target='.navbar-collapse.show'
                >
                  About
                </span>
              </li>
            </Link>
            <li className='nav-item dropdown mx-md-3 mx-auto'>
              <Link
                to=''
                className='nav-link dropdown-toggle'
                data-bs-toggle='dropdown'
                role='button'
                aria-expanded='false'
              >
                Categories
              </Link>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                {data.Category.map((CatName, index) => {
                  return (
                    <Link
                      to={{
                        pathname: `/categories/${CatName}`,
                        state: { CatName },
                      }}
                      key={index}
                    >
                      <li>
                        <span
                          className='dropdown-item text-capitalize'
                          data-bs-toggle='collapse'
                          data-bs-target='.navbar-collapse.show'
                        >
                          {CatName}
                        </span>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </li>
            <Link to='/cart'>
              <li className='nav-item d-sm-none d-md-none d-lg-block d-none'>
                <span
                  className='nav-link position-relative'
                  data-bs-toggle='collapse'
                  data-bs-target='.navbar-collapse.show'
                >
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className='cart-basket-icon'
                  />
                  <div id='cart'>
                    <span
                      className={
                        item === 0
                          ? "hide-price"
                          : "position-absolute my-badge translate-middle badge rounded-pill bg-primary wf-light"
                      }
                    >
                      {item}
                    </span>
                  </div>
                </span>
              </li>
            </Link>
          </ul>

          <ul className='navbar-nav'>
            {Login ? (
              <></>
            ) : (
              <Link to='/login'>
                <li className='nav-item custom-button'>
                  <span
                    className='nav-link btn login'
                    data-bs-toggle='collapse'
                    data-bs-target='.navbar-collapse.show'
                  >
                    LogIn
                  </span>
                </li>
              </Link>
            )}
            {Login ? (
              <li className='nav-item my-custom-drop-down dropdown me-lg-5 me-xl-5 me-0'>
                <Link
                  to=''
                  className='nav-link '
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <Avatar
                    name={userName}
                    src={`https://joeschmoe.io/api/v1/${userName}`}
                    size='30'
                    round={true}
                    className='user-logo'
                  />
                </Link>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <Link className='dropdown-item' to='/logout'>
                      Sign out
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <Link to='/signup'>
                <li className='nav-item me-lg-5 me-xl-5 me-0'>
                  <button
                    className='nav-links btn btn-primary btn-signup waves-effect'
                    data-bs-toggle='collapse'
                    data-bs-target='.navbar-collapse.show'
                  >
                    Sign Up
                    <CaretRight style={{ marginBottom: "2px" }} />
                  </button>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
