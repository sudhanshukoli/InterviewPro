import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/TheUserContext.jsx";
import InterviewLevelSelection from "../common/InterviewLevelSelection";
import NavBar from "../common/NavBar";
import Dashboard from "./Dashboard";
import TechSelection from "./TechSelection";

export default function Home(){

    const theUserStoredData = {
        id: localStorage.getItem("userId"),
        username: localStorage.getItem("username"),
        role: localStorage.getItem("userRole"),
        name: localStorage.getItem("name")
    }

    const { setUserData } = useContext(UserContext);

    const [theStack, setTheStack ] = useState(null);

    useEffect(() =>{
        setUserData(theUserStoredData);
    }, [])

    return(<>
            {theStack !== null ? (<InterviewLevelSelection stack={theStack} setTheStack={setTheStack} />) :
                (<section>
                    <NavBar/>
                    <Dashboard/>
                    <TechSelection setTheStack={setTheStack}/>
                </section>)}  
        </>)

}