import { useState } from "react";
import InterviewLevelSelection from "../common/InterviewLevelSelection";
import NavBar from "../common/NavBar";
import Dashboard from "./Dashboard";
import TechSelection from "./TechSelection";

export default function Home(){

    const [theStack, setTheStack ] = useState(null);

    return(<>
            {theStack !== null ? (<InterviewLevelSelection stack={theStack} setTheStack={setTheStack} />) :
                (<section>
                    <NavBar/>
                    <Dashboard/>
                    <TechSelection setTheStack={setTheStack}/>
                </section>)}
        </>)

}