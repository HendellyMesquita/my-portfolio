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
              <ProgressBar/>
            </div>
        </div>
    </div>

  );
};

export default Experience;
   