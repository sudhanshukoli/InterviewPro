import { aboutData } from "../../data/aboutData/aboutData";
import NavBar from "../common/NavBar";
import AboutProject from "./AboutProject";
import AboutValues from "./AboutValues";
import SkillsUsed from "./SkillsUsed";
import TopIntro from "./TopIntro";

export default function About(){

    return(<>

        <div className="bg-linear-to-b from-blue-900/30 to-black ">
            <NavBar/>
            
            <section className="w-full h-full pt-30 text-white flex flex-col justify-center items-center">
                <TopIntro theData={aboutData} />    

                <hr className="w-full border-0 m-20 h-0.5 bg-blue-800/20" />

                <AboutProject />

                <hr className="w-full border-0 m-20 h-0.5 bg-blue-800/20" />
                
                <AboutValues />

                <hr className="w-full border-0 m-20 h-0.5 bg-blue-800/20" />
                    
                <SkillsUsed />    

            </section>

        </div>    
    </>)    

}