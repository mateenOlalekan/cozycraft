import "./Header.css"
import HeadImg from "./header.png";
function Header() {
  return (
    <>
        <header className="header">
            <div className="container header_container">
                <div className="header_filter">
                <a href="#" className="header_filter_link">Woman’s Fashion</a>
                <a href="#" className="header_filter_link">Men’s Fashion</a>
                <a href="#" className="header_filter_link">Electronics</a>
                <a href="#" className="header_filter_link">Home & Lifestyle</a>
                <a href="#" className="header_filter_link">Medicine</a>
                <a href="#" className="header_filter_link">Sports & Outdoor</a>
                <a href="#" className="header_filter_link">Baby’s & Toys</a>
                <a href="#" className="header_filter_link">Groceries & Pets</a>
                <a href="#" className="header_filter_link">Health & Beauty</a>
                </div>
               <img src={HeadImg} alt="" className="header_img" />
                
            </div>
        </header>
    </>
  )
}

export default Header;