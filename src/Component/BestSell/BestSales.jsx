// Fix the import statement
import BestCards from './BestCards';
import "./BestSale.css";

function Best_Sales() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section_category">
            <p className="section_category_p">This Month</p>
            <h2>Best Selling Products</h2>
          </div>
          <BestCards />
         
        </div>
      </section>
    </>
  );
}

export default Best_Sales;
