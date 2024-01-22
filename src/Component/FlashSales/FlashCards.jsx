import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import contentData from './contentData';
import FlashCard from './FlashCard';

const FlashCards = () => {
  return (
<Swiper
  slidesPerView={4}
  spaceBetween={10}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1040: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  }}
  navigation={true}
  modules={[Pagination, Autoplay, Navigation]}
  className="mySwiper"
>
      {contentData.map((card, index) => (
        <SwiperSlide key={index}>
          <FlashCard {...card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FlashCards;
