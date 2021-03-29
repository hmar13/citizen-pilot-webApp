import React from 'react';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Progressbar = () => {
  const percentage = 50;
  return (
    <CircularProgressbarWithChildren
      value={percentage}
      styles={buildStyles({
        rotation: 0,
        strokeLinecap: 'butt',
        textSize: '16px',
        pathTransitionDuration: 0.5,
        pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })}
    ><div style={{ fontSize: 20, marginTop: -5 }}>
    <strong>50%</strong> Completed
  </div></CircularProgressbarWithChildren>
  );
}

export default Progressbar;