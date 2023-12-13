
import { GitHubIcon } from "../Icons/gitHub-icon";
import { InstaIcon } from "../Icons/insta-icon";
import { LinkedinIcon } from "../Icons/linkedin-icon";
import { TwiterIcon } from "../Icons/twiter-icon";
import "./SocialButtons.scss"

export function SocialBtns(){

    return(
     <div className="social">
         <a href="https://www.instagram.com">
            <InstaIcon/>
         </a>
         <a href="https://github.com/HendellyMesquita">
            <GitHubIcon/>
         </a>
         <a href="https://www.linkedin.com/in/hendelly-lorrany-s-mesquita-28b8921a4/">
            <LinkedinIcon/>
         </a>
         <a href="https://twitter.com">
            <TwiterIcon/>
         </a>
     </div>  
    )
}