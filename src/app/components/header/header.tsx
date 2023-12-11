import Image from 'next/image'
import "./header.scss"
export function Header(){
    return(
        <div className = "header">
          <div>
            <h1>Hi, i´m Hendelly!</h1>
            <h2>Software Developer</h2>
          </div>
          <Image
          src="/Hendy-Photo.png"
          alt="Next.js Logo"
          width={310}
          height={310}
          priority
        />
        </div>   
    )
}