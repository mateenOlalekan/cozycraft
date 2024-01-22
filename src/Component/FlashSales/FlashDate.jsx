import { useEffect, useState } from 'react';

function FlashDate() {
      const countDownDate = new Date("Dec 5, 2023 15:37:25").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      clearInterval(); // ReferenceError: intervalId is not defined
      return 'EXPIRED';
    }
  }

  return (
    <>
         <div className="section_header">
            <h3 className="section_title">Flash Sale</h3>
            <p id="demo">{timeLeft}</p>
          </div>
    </>
  )
}

export default FlashDate