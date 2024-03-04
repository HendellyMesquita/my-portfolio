
import { GitHubIcon } from "../Icons/gitHub-icon";
import { LinkedinIcon } from "../Icons/linkedin-icon";
import "./SocialButtons.scss"

export function SocialBtns(){

    return(
     <div className="social">
         <a href="https://github.com/HendellyMesquita">
            <GitHubIcon/>
         </a>
         <a href="https://www.linkedin.com/in/hendelly-lorrany-s-mesquita-28b8921a4/">
            <LinkedinIcon/>
         </a>
     </div>  
    )
}