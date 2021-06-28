import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./logo.PNG";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./../Global/cartContext";
import { faCircle, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CategoryContext } from "../Global/categoryContext";
import { ArrowBarRight } from "react-bootstrap-icons";

const Navbar = (props) => {
  const { item } = useContext(CartContext);
  const data = useContext(CategoryContext);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <div>
      <div>
        <nav
          className={
            scroll
              ? "navbar navbar-expand-lg fixed-top shadow-lg navbar-light bg-light"
              : "navbar navbar-expand-lg fixed-top logo navbar-light bg-light"
          }
        >
          <NavLink className='navbar-brand' to='/'>
            <img
              src={logo}
              alt='logo'
              className={scroll ? "logo-after-scroll" : "logo-before-scroll"}
            />
          </NavLink>

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
                <li className='nav-item active mx-md-2 mx-auto'>
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
                <li className='nav-item mx-md-2 mx-auto'>
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
                <li className='nav-item mx-md-2 mx-auto'>
                  <span
                    className='nav-link'
                    data-bs-toggle='collapse'
                    data-bs-target='.navbar-collapse.show'
                  >
                    About
                  </span>
                </li>
              </Link>
              <li className='nav-item dropdown mx-md-2 mx-auto'>
                <Link
                  to=''
                  className='nav-link dropdown-toggle'
                  data-bs-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-expanded='false'
                >
                  Categories
                </Link>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  {data.Category.map((catName, index) => {
                    return (
                      <Link
                        to={{
                          pathname: `/categories/${catName}`,
                          state: { catName },
                        }}
                        key={index}
                      >
                        <li>
                          <span
                            className='dropdown-item text-capitalize'
                            data-bs-toggle='collapse'
                            data-bs-target='.navbar-collapse.show'
                          >
                            {catName}
                          </span>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </li>
            </ul>
            <ul className='navbar-nav'>
              <Link to='/cart'>
                <li className='nav-item d-sm-none d-md-block d-none'>
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
              <Link to='/'>
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
              <Link to='/'>
                <li className='nav-item me-md-5 me-0'>
                  <button
                    className='nav-links btn btn-primary custom-button signup'
                    data-bs-toggle='collapse'
                    data-bs-target='.navbar-collapse.show'
                  >
                    SignUp <ArrowBarRight />
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
        <div className='icon-bar'>
          <Link to='/cart'>
            <span
              className='nav-link'
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
                      : " cart-basket d-flex align-items-center justify-content-center"
                  }
                >
                  {item}
                </span>
              </div>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
