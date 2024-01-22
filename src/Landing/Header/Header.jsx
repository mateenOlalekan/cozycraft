// Header component
// import React from "react";
import { useState } from "react";
import "./Header.css";
import { LiaStoreAltSolid,LiaBar,LiaTimesSolid} from 'react-icons/lia';
const Header = () => {
  const [toggleMenu,setToggleMenu] =useState(false);
  return (
    <header>
      <div className="navLogo">
        <p>SmartStore</p>
        <LiaStoreAltSolid/>
      </div>
      
      <nav className="navLinks">
        <a href="#">Customers</a>
        <a href="#">Marketplace</a>
        <a href="#">Our product</a>
        <a href="#">Contact Us</a>
      </nav>
      <div className="navBtn">
       <button href="#">Login</button>
       <button href="#">Sign Up</button>
      </div>
    
      <div className="gpt3__navbar-menu">
        {toggleMenu 
          ? <LiaBar color="#fff" onClick={()=>setToggleMenu(false)} />
          :<LiaTimesSolid color="#fff" onClick={()=>setToggleMenu(true)}/>
        }
        {toggleMenu &&(
          <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#">Customer</a></p>
            <p><a href="#">Marketplace</a></p>
            <p><a href="#">Our product</a></p>
            <p><a href="#">Contact Us</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
           <button href="#">Login</button>
           <button href="#">Sign Up</button>
          </div>
        </div>
        )}
      </div>

    </header>
  );
};

export default Header;
