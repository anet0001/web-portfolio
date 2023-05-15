import React, { FC, useEffect, useState } from "react";

interface ClockProps {}

const Clock: FC<ClockProps> = () => {
  const [ottawaTime, setOttawaTime] = useState("");
  const [workingHours, setWorkingHours] = useState(false);

  useEffect(() => {
    const displayCurrentTime = () => {
      const date = new Date();
      const ottawaTime = date.toLocaleTimeString("en-US", {
        timeZone: "America/Toronto",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      });

      const hour = date.getHours();
      const workingHours = hour >= 7 && hour <= 23;

      setWorkingHours(workingHours);
      setOttawaTime(ottawaTime);
    };

    const timer = setInterval(displayCurrentTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock">
      <span className="time">{ottawaTime}</span>
      <span
        className={`status ${
          workingHours ? "status--working" : "status--resting"
        }`}
      />
    </div>
  );
};

export default Clock;
