'use client';
import React from 'react';

const array = [
  {
    hours: '09h00',
    name: 'Arrivée du public'
  },
  {
    hours: '09h30',
    name: 'début du talk'
  },
  {
    hours: '10h30',
    name: 'début du stage'
  },
  {
    hours: '12h00',
    name: 'Pause déjeuner'
  },
  {
    hours: '13h30',
    name: 'reprise du stage'
  },
  {
    hours: '16h00',
    name: 'fin du stage'
  }
];

function Program() {
  return (
    <div className="program">
      <h1 className="title">Programme</h1>
      <ul style={{ listStyleType: 'none', paddingTop: '170px' }}>
        {array.map((item, index) => {
          return (
            <li className="program__item" key={index}>
              <div className="program__hours">
                <h2 className="hours">{item.hours}</h2>
              </div>
              <div className="program__text">
                <p>{item.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Program;
