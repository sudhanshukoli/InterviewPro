import NavBar from "../common/NavBar";
import Dashboard from "./Dashboard";
import TechSelection from "./TechSelection"

export default function Home(){

    return(<>
        <section>
            <NavBar/>
            <Dashboard/>
            <TechSelection/>
        </section>
    </>)

}