import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = ({openModal, length}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button open modal className="btn btn-outline-light" type="submit">
              Search
            </button>
            <div onClick={openModal} className="cart-counter">
              <span><sup className="text-dark">{length}</sup></span>
              <FontAwesomeIcon
                className="nav-icons"
                icon={faShoppingCart}
              ></FontAwesomeIcon>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
