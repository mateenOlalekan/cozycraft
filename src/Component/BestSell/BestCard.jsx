import { FaRegHeart, FaStar } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import "./BestSale.css";
const FlashCard = ({ image, category, title, price, rate }) => {
  return (
    <div className="card">
      <div className="card-top">
        <img src={image} alt={title} className="card-img" />
        <div className="card-tag">{category}</div>
        <div className="card-top-icons">
          <FaRegHeart className="card-top-icon" />
          <FiEye className="card-top-icon" />
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">${price}</p>
        <div className="card-ratings">
          <div className="card-stars">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="w-6 h-6" />
            ))}
          </div>
          <p className="card-rating-numbers" style={{ marginLeft: "120px" }}>({rate})</p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
