import { SectionTitle } from "../../sectionTitle/sectionTitle"
import "./experiences.scss"
import ProgressBar from "../progressBar/progressBar"

const Experience: React.FC = () => {
  return (
    <div className="experience">
        <SectionTitle text="Experience"/>
        <p>2 years working as a software developer at Invent Software 💻</p>
        <div className="experience-time">
            <div>
                <span>C Charp: 2 years</span>
                <ProgressBar startDate={new Date('2021-11-01')} endDate={new Date('2024-01-01')} />
                <span>Java Script: 1 years</span>
                <ProgressBar startDate={new Date('2022-11-01')} endDate={new Date('2025-01-01')} />
                <span>Type Script: 2 months</span>
                <ProgressBar startDate={new Date('2023-08-01')} endDate={new Date('2026-01-01')} />
            </div>
        </div>
    </div>

  );
};

export default Experience;
   