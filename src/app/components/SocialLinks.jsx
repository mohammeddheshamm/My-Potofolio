import Image from "next/image";
import github from "../images/Github.png" 
import facebook from "../images/Facebook.png";
import linkedIn from "../images/LinkedIn.png";
import Gmail from "../images/Gmail.png"

function SocialLinks(){
    return(
        <div className="flex pt-4">
                <a href="https://www.linkedin.com/in/mohamed-hesham-577a8727b/" className="pr-4">
                        <Image src={linkedIn} width={40} height={40}/>
                    </a>
                <br/>
                    <a href="https://www.facebook.com/profile.php?id=100007522364136&mibextid=LQQJ4d" className="pr-4">
                        <Image src={facebook} width={40} height={40}/>
                    </a>
                <br/>
                    <a href="https://github.com/mohammeddheshamm" className="pr-4">
                        <Image src={github} width={40} height={40}/>
                    </a>
                <br/>
                    <a href="" className="pr-4">
                        <Image src={Gmail} width={40} height={40}/>
                    </a>
                <br/>
            </div>
    );
}

export default SocialLinks;