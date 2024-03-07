import React from 'react';
import './ProgressBar.scss';

interface ProgressBarProps {
  startDate: Date;
  endDate: Date;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ startDate, endDate }) => {
  const currentDate = new Date();
  const totalDuration = endDate.getTime() - startDate.getTime();
  const progress = (currentDate.getTime() - startDate.getTime()) / totalDuration;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress * 100}%` }}></div>
    </div>
  );
};

export default ProgressBar;
