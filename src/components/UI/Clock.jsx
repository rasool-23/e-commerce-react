import { useEffect, useState } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date("Sep 10, 2023");
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <div className="flex items-center justify-center lg:justify-start gap-3">
      <div className="cdata  flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white text-[1rem] md:text-xl  mb-2">{days}</h1>
          <h5 className="text-white text-[.9rem] md:text-xl">Days</h5>
        </div>
        <span className="text-white text-xl">:</span>
      </div>
      <div className="cdata  flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white text-[1rem] md:text-xl  mb-2">{hours}</h1>
          <h5 className="text-white  text-[.9rem] md:text-xl">Hours</h5>
        </div>
        <span className="text-white text-xl">:</span>
      </div>
      <div className="cdata  flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white text-[1rem] md:text-xl  mb-2">{minutes}</h1>
          <h5 className="text-white text-[.9rem] md:text-xl">Minutes</h5>
        </div>
        <span className="text-white text-xl">:</span>
      </div>
      <div className="cdata  flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white text-[1rem] md:text-xl  mb-2">{seconds}</h1>
          <h5 className="text-white text-[.9rem] md:text-xl">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
