import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import BestCard from './BestCard';

const FlashCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productUrl = "https://fakestoreapi.com/products";
    
    axios.get(productUrl)
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching data", error));

  }, []); // Empty dependency array to run the effect only once

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={5}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay,Pagination, Navigation]}
      className="mySwiper"
    >
      {products.map((card, index) => (
        <SwiperSlide key={index}>
          <BestCard {...card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FlashCards;
