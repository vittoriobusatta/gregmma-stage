'use client';
import React, { useState, useEffect, useCallback } from 'react';

function Timer() {
  const targetDate = new Date('November 26, 2023 09:00:00').getTime();

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
      heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      secondes: Math.floor((difference / 1000) % 60)
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [calculateTimeLeft]);

  return (
    <section className="timer">
      <div className="timer__container">
        <div>
          <h3>JOURS</h3>
          <h2 className="hours">{timeLeft.jours}</h2>
        </div>
        <div>
          <h3>HEURES</h3>
          <h2 className="hours">{timeLeft.heures}</h2>
        </div>
        <div>
          <h3>MINUTES</h3>
          <h2 className="hours">{timeLeft.minutes}</h2>
        </div>
        <div>
          <h3>SECONDES</h3>
          <h2 className="hours">{timeLeft.secondes}</h2>
        </div>
      </div>
    </section>
  );
}

export default Timer;
