// Fix the import statement
import FlashDate from "./FlashDate";
import FlashCards from './FlashCards';
import "./FlashSale.css";

function Flash_Sales() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section_category">
            <p className="section_category_p">Todays</p>
          </div>
          <FlashDate />
          <FlashCards />
          <div className="container-btn">
          <a href="#" className="container-btn-a">VIEW ALL PRODUCTS</a>
        </div>
        </div>
      </section>
    </>
  );
}

export default Flash_Sales;
