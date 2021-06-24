import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./logo.JPG";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./../Global/cartContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (props) => {
  const { item } = useContext(CartContext);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <>
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
            className={scroll ? "logo-before-scroll" : "logo-after-scroll"}
          />
        </NavLink>
        {/* {window.innerWidth > 500 ? (
          ""
        ) : (
          <div>
            <NavLink className='navbar-brand cursor' to='/cart'>
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
            </NavLink>
          </div>
        )} */}
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link cursor' to='/cart'>
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
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
          </ul>
          {/* <ul className='navbar-nav ml-auto pr-5'>
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                SignUp
              </Link>
            </li>{" "}
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                LogIn
              </Link>
            </li>
          </ul> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
