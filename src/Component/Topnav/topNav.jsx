import { useState, useEffect } from "react";
import "./topNav.css";
import { FaHeart, FaSearch } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { HiOutlineMenu } from "react-icons/hi";

function topNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on initial load and window resize
  useEffect(() => {
    setIsMobileMenuOpen(false);
    const handleResize = () => setIsMobileMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="top_nav">
        <div className="container top_nav_container">
          <div className="top_nav_wrapper">
            <p className="tap_nav_p">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
            <a href="#" className="top_nav_link">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
      <nav className="nav">
        <div className="container nav_container">
          <a href="#" className="nav_logo">
            EXCLUSIVE
          </a>
          <ul className="nav_list">
            <li className="nav_item">
              <a href="/" className="nav_link">
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                About
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                Contact
              </a>
            </li>
            <li className="nav_item">
              <a href="/sign-up.html" className="nav_link">
                Sign up
              </a>
            </li>
          </ul>
          <div className="nav_items">
            <form action="#" className="nav_form">
              <input
                type="text"
                className="nav_input"
                placeholder="search here...."
              />
              <FaSearch className="nav_search" />
            </form>
            <img src="./image/heart.png" alt="" className="nav_heart" />
            <FaHeart className="nav_heart" />
            <a href="/cart.html">
              <GrCart className="nav_cart" />
            </a>
          </div>
          <span className="hamburger" onClick={toggleMobileMenu}>
            <HiOutlineMenu className="hamburger_icon" />
          </span>
        </div>
      </nav>
      <nav
        className={`mobile_nav ${isMobileMenuOpen ? "" : "mobile_nav_hide"}`}
      >
        <ul className="mobile_nav_list">
          <li className="mobile_nav_item">
            <a href="/" className="mobile_nav_link">
              Home
            </a>
          </li>
          <li className="mobile_nav_item">
            <a href="#" className="mobile_nav_link">
              About
            </a>
          </li>
          <li className="mobile_nav_item">
            <a href="#" className="mobile_nav_link">
              Contact
            </a>
          </li>
          <li className="mobile_nav_item">
            <a href="/sign-up.html" className="mobile_nav_link">
              Sign Up
            </a>
          </li>
          <li className="mobile_nav_item">
            <a href="/cart.html" className="mobile_nav_link">
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default topNav;
