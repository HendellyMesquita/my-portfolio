import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";
import { SocialBtns } from "./components/socialButtons/socialButtons";
import { Project } from "./components/Projects/projects";

import "./styles/home.scss"
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
      <Project/>
    </main>
  )
}
