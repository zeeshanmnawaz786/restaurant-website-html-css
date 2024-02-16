import React, { useRef } from "react";
import Logo from "../assests/logo.jpg";
import { cart } from "../Components/Data";

const Header = () => {
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();
  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    searchRef.current.classList.remove("active");
  };
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#product">Product</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </nav>
        <div className="icons">
          <div className="fa fa-search" onClick={searchHandler}></div>
          <div className="fa fa-shopping-cart" onClick={cartHandler}></div>
          <div
            className="fa fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="Search here.." id="search-box" />
          <label htmlFor="search-box" className="fa fa-search"></label>
        </div>
        <div className="cart-items-container " ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span className="fa fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>Cart item 01</h3>
                <div className="price">$15.99/-</div>
              </div>
            </div>
          ))}
          <a className="btn" href="#">
            Checkout Now
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
