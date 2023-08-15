import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    timeStyle: "short"
  });
  const formattedDate = currentTime.toLocaleDateString();

  return (
    <div className="clock-container">
      <div className="time">{formattedTime}</div>
      <div className="date">{formattedDate}</div>
    </div>
  );
};

export default Clock;
