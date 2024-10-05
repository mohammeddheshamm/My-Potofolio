import Link from "next/link";
import Image from "next/image";
import Code from "./images/Code.png"

function NavLinks(){
    return(
        <nav className="p-5 bg-zinc-900  shadow-gray-400 top fixed w-full " >
          <div className=" flex shadow-gray-400 ">
            <Image src={Code} width={30} height={30} style={{marginTop:"10px",marginLeft:"20px"}}/>
            <Link style={{marginTop:"10px",marginLeft:"25px"}}href="/">Home</Link>
            <Link style={{marginTop:"10px",marginLeft:"20px"}}href="/experience">Experience</Link>
            <Link style={{marginTop:"10px",marginLeft:"20px"}}href="/projects">Projects</Link>
            <Link style={{marginTop:"10px",marginLeft:"20px"}}href="/certificates">Certificates</Link>
            <Link style={{marginTop:"10px",marginLeft:"20px"}}href="/resume">Resume</Link>
          </div>
        </nav>
    );
}

export default NavLinks;