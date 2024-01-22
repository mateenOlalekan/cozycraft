import "./Feature.css"
import gallery1 from "./FeatureImg/gallery-1.png";
import gallery2 from "./FeatureImg/gallery-2.png";
import gallery3 from "./FeatureImg/gallery-3.png";
import gallery4 from "./FeatureImg/gallery-4.png";


function Feature() {
  return (
    <>
    <section className="section">
      <div className="container">
        <div className="section_category">
          <p className="section_category_p">Featured</p>
        </div>
        <div className="section_header">
          <h3 className="section_title">New Arrivals</h3>
        </div>
        <div className="gallery">
          <div className="gallery_item gallery_item_1">
            <img
              src={gallery1}
              alt=""
              className="gallery_item_img" />
            <div className="gallery_item_content">
              <div className="gallery_item_title">Playstation 5</div>
              <p className="gallery_item_p">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <a href="#" className="gallery_item_link">SHOP NOW</a>
            </div>
          </div>
          <div className="gallery_item gallery_item_2">
            <img
              src={gallery2}
              alt=""
              className="gallery_item_img" />
            <div className="gallery_item_content">
              <div className="gallery_item_title">Playstation 5</div>
              <p className="gallery_item_p">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <a href="#" className="gallery_item_link">SHOP NOW</a>
            </div>
          </div>
          <div className="gallery_item gallery_item_3">
            <img
              src={gallery3}
              alt=""
              className="gallery_item_img" />
            <div className="gallery_item_content">
              <div className="gallery_item_title">Playstation 5</div>
              <p className="gallery_item_p">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <a href="#" className="gallery_item_link">SHOP NOW</a>
            </div>
          </div>
          <div className="gallery_item gallery_item_4">
            <img
              src={gallery4}
              alt=""
              className="gallery_item_img" />
            <div className="gallery_item_content">
              <div className="gallery_item_title">Playstation 5</div>
              <p className="gallery_item_p">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <a href="#" className="gallery_item_link">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Feature