import Image from "next/image"
import { SectionTitle } from "../sectionTitle/sectionTitle"
import "./experience.scss"

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>
            <p>2 years working as a software developer at Invent Software 💻</p>
            <div className="experience-time">
                <div className="experience-language">
                    <Image
                      src="/Charp.png"
                      alt="Csharp Logo"
                      width={40}
                      height={40}
                      priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>2 years</span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                      src="/java.png"
                      alt="Java Logo"
                      width={40}
                      height={40}
                      priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>2 years</span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                      src="/JS.png"
                      alt="JS Logo"
                      width={40}
                      height={40}
                      priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>6 months</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}