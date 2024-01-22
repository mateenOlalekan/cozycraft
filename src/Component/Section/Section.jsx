import Speaker from "./Speaker.png";
import Computer from "./Computer.png";
import Gaming from "./Gaming.png";
import Headphone from "./Headphone.png";
import Camera from "./Camera.png";
import phone from "./phone.png";
import Watches from "./watch.png";


function Section() {
  return (
   <>
      <section className="section">
        <div className="container">
          <div className="section_category">
            <p className="section_category_p">categories</p>
          </div>
          <div className="section_header">
            <h3 className="section_title">Browse by Category</h3>
          </div>
          <div className="categories">
            <div className="category">
              <img src={Camera} alt="" className="category_icon" />
              <p className="category_name">Cameras</p>
            </div>
            <div className="category">
              <img
                src={Computer}
                alt=""
                className="category_icon" />
              <p className="category_name">Computers</p>
            </div>
            <div className="category">
              <img src={Gaming} alt="" className="category_icon" />
              <p className="category_name">Gaming</p>
            </div>
            <div className="category">
              <img
                src={Headphone}
                alt=""
                className="category_icon" />
              <p className="category_name">Headphones</p>
            </div>
            <div className="category">
              <img src={phone} alt="" className="category_icon" />
              <p className="category_name">Phones</p>
            </div>
            <div className="category">
              <img src={Watches} alt="" className="category_icon" />
              <p className="category_name">Watches</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="trending">
            <div className="trending_content">
              <p className="trending_p">categories</p>
              <h2 className="trending_title">Enhance Your Music Experience</h2>
              <a href="#" className="trending_btn">Buy Now!</a>
            </div>
            <img src={Speaker} alt="" className="trending_img" />
          </div>
        </div>
      </section>
   </>
  )
}

export default Section