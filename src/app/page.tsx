import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import "./styles/home.scss"
export default function Home() {
  return (
    <main className="container">
        <Header/>
        <Experience/>
          <div className="infos">
                <h3>Languages</h3>
                <div className="languages-info">
                  <span>PT-BR - Native Speaker</span>
                  <span>EN - Basic</span>
                </div>
                <h3>Education</h3>
                <div className="educational-info">
                  <span>👩🏽‍🎓</span>
                  <span>Systems Development Analyst - Estácio de Sá University</span>
                </div>
          </div>
          <div className="buttons"></div>
          <div className="social"></div>
          <div>
            <button>Contact me</button>
          </div>
    </main>
  )
}
