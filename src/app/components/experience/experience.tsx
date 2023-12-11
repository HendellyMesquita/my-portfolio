import { SectionTitle } from "../sectionTitle/sectionTitle"
import "./experience.scss"

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>
            <p>2 years working as a software developer at Invent Software</p>
            <div className="experience-time">
            </div>
        </div>
    )
}