import "./Services.css";
import Service1 from "../Service/service-1.png";
import Service2 from "../Service/service-2.png";
import Service3 from "../Service/service-3.png";

const servicesData = [
  {
    imgSrc: Service1,
    title: 'FAST AND FREE DELIVERY',
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    imgSrc: Service2,
    title: '24/7 SUPPORT',
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    imgSrc:Service3,
    title: 'MONEY BACK GUARANTY',
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
];

const Services = () => {
  return (
    <section className="section">
      <div className="container services_container">
        {servicesData.map((service, index) => (
          <div key={index} className="service">
            <img src={service.imgSrc} alt="" className="service_img" />
            <h3 className="service_title">{service.title}</h3>
            <p className="service_p">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
