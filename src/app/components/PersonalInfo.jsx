import Image from "next/image";
import Me from "../images/Ana2.jpg"
import SocialLinks from "./SocialLinks";
import AboutMe from "./AboutMe";

function PersonalInfo(){
    return(
        <div className="flex justify-center items-center ">
            <div className="pt-5 mt-28">
            <h2 className="text-2xl text-sky-700 italic">Software Engineer</h2>
            <h1 className="text-4xl italic">Mohamed Hesham</h1>
            <SocialLinks />
            <AboutMe />
            </div>
            
            <div className="rounded-2xl">
                 <Image src={Me} width="350" height="550" className="rounded-full ml-3 mt-20 shadow-white" /> 
            </div>

           
        </div>
        
    )
}

export default PersonalInfo; 