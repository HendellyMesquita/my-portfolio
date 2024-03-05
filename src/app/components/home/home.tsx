import { Experience } from "../experience/experience";
import { Header } from "../header/header";
import { Info } from "../information/information";
import { SocialBtns } from "../socialButtons/socialButtons";

import "./home.scss"
export default function Home() {
  return (
    <main className="pageContainer">
      <main className="container">
          <Header/>
          <Experience/>
           <Info/>
            <div className="buttons">
                <SocialBtns/>
                <a className="btn-primary" href="mailto:hendelly.mesquita@inventsoftware.com.br">
                  Contact me ✉
                </a>
            </div>
      </main>
    </main>
  )
}
