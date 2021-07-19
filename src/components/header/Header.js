import React from "react";
import "./Header.css";
import navLogo from "../../assests/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <Link to="/">
          <a class="navbar-brand">
            <img width="40px" height="30px" alt="navLogo" src={navLogo} />
          </a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/products">
                <a class="btn">Products</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact">
                <a class="btn">Contact</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about">
                <a class="btn">About</a>
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <Link to="/products">
              <button class="btn shop btn-outline-secondary my-2 my-sm-0">
                Shop
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
