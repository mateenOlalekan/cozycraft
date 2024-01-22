import './Aside.css';

function Aside() {
  const asideContent = [
    {
      id: 1,
      value: "10x",
      subData: "10x less costly",
      sub: "Build your online store using Smartstore template",
    },
    {
      id: 2,
      value: "120%",
      subData: "Best material",
      sub: "Build your online store using Smartstore template",
    },
    {
      id: 3,
      value: "100k",
      subData: "Happy Clients",
      sub: "Build your online store using Smartstore template",
    },
  ];

  return (
    <div className='aside'>
      <div className="cardContainer">
        {asideContent.map((red) => (
          <div className='content' key={red.id}>
            <h3>{red.value}</h3>
            <h4>{red.subData}</h4>
            <p>{red.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aside;
