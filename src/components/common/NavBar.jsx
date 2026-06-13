import { faArrowRightFromBracket, faBars, faBrain, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

export default function NavBar(){
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.removeItem("isLogged");
        localStorage.removeItem("userFirstName");
        localStorage.removeItem("userId");
        navigate("/login");
    }

    const [menuOpen, setMenuOpen] = useState(false);

    const onActiveNavCss = "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent";

    return(<>
    
    <div className="sticky top-0 z-20 w-full px-3 font-mono">

        <div className="relative border-b border-blue-700 rounded-2xl bg-black/40 shadow-[0_0_60px_rgba(59, 130, 246, 0.35)] p-5 backdrop-blur-md">
                            
            <div className="flex items-center justify-between">         
                <div className="flex items-center">
                    <FontAwesomeIcon className="text-2xl text-blue-500" icon={faBrain} /> 
                    <h1 className="text-xl font-semibold text-transparent sm:text-2xl md:text-3xl  bg-linear-to-r from-blue-400 via-white to-blue-700 bg-clip-text"> InterviewPro</h1>
                </div>
                        
                <nav className="flex-wrap justify-center hidden gap-2 text-sm text-white md:flex text-xlflex sm:gap-4 sm:text-lg md:text-xl">
                    <NavLink whileHover={{scale: 1.1}} to="/" className={({isActive})=>` px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `}>Home</NavLink>
                    <NavLink to="/about" className={({isActive})=>` px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `}>About</NavLink>
                    <NavLink to="/contact" className={({isActive})=>` px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `}>Contact</NavLink>
                    <button className="border border-orange-500 bg-orange-900/30 text-orange-500 p-1 px-4 rounded-2xl cursor-pointer" onClick={handleLogout} ><FontAwesomeIcon icon={faArrowRightFromBracket} />Logout</button>
                </nav>

                {/* Mobile Hamburger */}
                <button className="text-2xl text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)} >
                    <FontAwesomeIcon  icon={menuOpen ? faXmark : faBars}  />
                </button>
            </div>
            
            {/* Mobile Dropdown */}
            <motion.div initial={false}  animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0, }} className="overflow-hidden md:hidden" >

                <nav className="flex flex-col gap-4 mt-5 text-lg text-center text-white " >

                    <NavLink whileHover={{scale: 1.1}} to="/" className={({isActive})=>` px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `}>Home</NavLink>

                    <NavLink to="/about" className={({isActive})=>` px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `}>About</NavLink>

                    <NavLink to="/contact" className={({isActive})=>` px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `}>Contact</NavLink>

                    <button className="border border-orange-500 bg-orange-900/30 text-orange-500 p-1 px-4 rounded-2xl" onClick={handleLogout} ><FontAwesomeIcon icon={faArrowRightFromBracket} />Logout</button>

                </nav>

            </motion.div>

        </div>        

    </div>

    </>)
}