import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./searchNav.css";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../Global/cartContext";

const SearchNav = (props) => {
  const { item } = useContext(CartContext);

  return (
    <>
      <nav className='navbar navbar-expand-sm mb-5 bg-danger'>
        <ul className='navbar-nav ml-sm-auto'>
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
          <form className='form-inline my-2 my-lg-0'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Search Item...'
              />
              <div className='input-group-append'>
                <button className='btn btn-secondary' type='button'>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </form>
        </ul>
      </nav>
    </>
  );
};

export default SearchNav;
