import { faBrain, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";
import bgLogin from "../../data/images/bgLogin.jpg";
import useApi from "../../hooks/useApi";

export default function Signup(){

     const { post } = useApi();

    const { setUserData, userData } = useContext(UserContext);

    const inputClasses = "float-left pl-12 mb-5 md:mb-4 p-2 md:p-4 bg-transparent border rounded-2xl w-full md:w-120 border-gray-400 border-opacity-700";
    const labelClasses = "self-start text-sm md:text-xl mb-2 text-gray-400";

    const navigate = useNavigate();

    const [signupData, setignupData] = useState({
        name: "",
        username: "",
        password: ""
    })

    const [signupClicked, setSignupClicked] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);
    const [availableUsername, setAvailableUsername] = useState(null);
    const isDisabled = ((!signupData.username.trim() || !signupData.password.trim() || !signupData.name.trim() || availableUsername == null || availableUsername));

    function handleChange(e){

        setignupData({
            ...signupData, [e.target.name]: e.target.value
        });

    };

    async function checkUsername(){
        try{
            const availableUsername = await post(`/auth/checkUsername?username=${signupData.username}`);
            console.log(availableUsername);
            if(signupData.username != ""){
                setAvailableUsername(availableUsername);
            } else {
                setAvailableUsername(null);
            }  
        } catch (error){
            console.error('Request failed:', error);
        }
    }
    

    async function handleSignup(){

        setSignupClicked(true);

        if (
                !signupData.name || signupData.name.trim()=="" || !signupData.username || !signupData.password 
            ) {
                console.log("--" + signupData.name );
                console.log("--" + signupData.username );
                console.log("--" + signupData.password );
                alert("Fill all fields");
            return;
        }

        try{
            const theUserData = await post("/auth/signup", signupData);
            setUserData(theUserData);
            localStorage.setItem("isLogged", true);
            navigate("/");
        } catch (error){
            localStorage.removeItem("isLogged");
            console.error('Request failed:', error);
        }
    };

    if(localStorage.getItem("isLogged")){
        setAllItems();
    }

    function setAllItems(){
        console.log(userData.name + "- this is user name");
        console.log(userData.id + "- this is user name");
        localStorage.setItem("userFirstName", userData.name);
        localStorage.setItem("userId", userData.id);

    }

    const handleLogin = () => {
            if (animateOut) {
            navigate("/login");
        }
    }

    function noSpace(e){
            if(e.key === " "){
            e.preventDefault();
        }

    }

    return(<>
        <section style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgLogin})`}} className="text-white flex items-center justify-center bg-cover bg-linear-to-b from-blue-900/30 to-black w-full h-screen overflow-hidden shadow-xl">
            <motion.div initial={{ y:  animateOut ? 0 : -800, opacity: animateOut ? 1 : 0 }} transition={{duration: 0.5, ease:"easeInOut"}} animate={{ y: animateOut ? -800 : 0, opacity: animateOut ? 0 : 1 }}
                        onAnimationComplete={ handleLogin } className="m-8 border rounded-2xl items-center  w-[80%] h-[60%]  md:w-140 md:h-170 flex flex-col  border-white/20 shadow-2xl backdrop-blur-sm ">
                <div className="flex p-4 ">
                    <div className="p-4 self-start">
                        <p className="text-sm md:text-md text-left text-gray-400 ">START FOR FREE</p>
                        <h1 className="text-xl md:text-2xl text-left font-bold ">Create a new account.</h1>
                        <p className="text-sm md:text-md text-left text-gray-400">Enter your details below</p>
                    </div>

                    <div className="flex items-center">
                        <FontAwesomeIcon className="text-sm md:text-2xl text-blue-500" icon={faBrain} /> 
                        <h1 className="text-xl  font-semibold text-transparent sm:text-2xl md:text-3xl  bg-linear-to-r from-blue-400 via-white to-blue-700 bg-clip-text"> InterviewPro</h1>
                    </div>
                </div>  

                <div className="flex flex-col items-center justify-center w-[80%]">
                    <label htmlFor="name" className={labelClasses}>Name</label>
                    <input className={inputClasses} onChange={handleChange} value={signupData.name} type="text" name="name" placeholder="Your name" />

                    <div className="w-full flex justify-between">
                        <label htmlFor="username" className={labelClasses}>Username</label> 
                        {availableUsername === false && (  <i><FontAwesomeIcon icon={faCheck} /> username available</i> )}
                        {availableUsername === true  && ( <i><FontAwesomeIcon icon={faXmark} /> username already exists!</i> )}
                    </div>    
                    <input onBlur={checkUsername} onKeyDown={noSpace} className={inputClasses} onChange={handleChange} value={signupData.username} type="text" name="username" placeholder="Username" />

                    <label htmlFor="password" className={labelClasses}>Password</label>
                    <input onKeyDown={noSpace}  className={inputClasses} onChange={handleChange} value={signupData.password} type="password" name="password" placeholder="Password" />

                    <button className={`p-2 md:p-3 font-semibold ${isDisabled ? "cursor-not-allowed bg-gray-800" : "cursor-pointer bg-blue-900 from-blue-950 to-blue-500 hover:bg-linear-to-tr" } text-white w-full md:w-120 rounded-2xl`} 
                            disabled={isDisabled} onClick={handleSignup} >{signupClicked ? "Creating account...." : "Signup"}</button>
                </div>

                <h1 className="text-sm md:text-xl text-gray-400 py-2 md:py-8">Already have an account ? <button onClick={() => setAnimateOut(true)} className="underline cursor-pointer hover:text-white" >Login</button></h1>
            </motion.div>
        </section>
    </>)
}