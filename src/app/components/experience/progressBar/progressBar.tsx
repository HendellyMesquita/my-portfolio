import React from 'react';
import './ProgressBar.scss';
interface Course {
  language: string;
  startDate: Date;
}

const courses: Course[] = [
  { language: '⚡ CSharp', startDate: new Date('2021-11-19') },
  { language: '☕ Java Script', startDate: new Date('2022-11-19') },
  { language: '⚛︎ Type Script', startDate: new Date('2023-10-07') },
];

const calculateDuration = (startDate: Date): string => {
  const currentDate = new Date();
  const diffInMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;
  return `${years} years, ${months} months`;
};
const calculateProgress = (startDate: Date): number => {
  const currentDate = new Date();
  const totalDuration = currentDate.getTime() - startDate.getTime();
  const maxDuration = currentDate.getTime() - courses[0].startDate.getTime();
  return Math.min(100, (totalDuration / maxDuration) * 100);
};

const ProgressBar: React.FC<{ course: Course }> = ({ course }) => {
  const duration = calculateDuration(course.startDate);
  const progress = calculateProgress(course.startDate);

  return (
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}  />
        <div className="label">{duration}</div>
      </div>
  );
};

const progressBar: React.FC = () => {
  return (
    <div className="app">
      {courses.map(course => (
        <div key={course.language} className="course">
          <span>{course.language}</span>
          <ProgressBar course={course} />
        </div>
      ))}
    </div>
  );
};

export default progressBar;
