import { faBrain, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { motion } from "motion/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";

export default function Signup(){

    const deployedUrl = "https://interviewprobackend-1.onrender.com";
    const { setUserData } = useContext(UserContext);

    const inputClasses = "float-left pl-12 mb-4 p-4 bg-transparent border rounded-2xl w-120 border-gray-400 border-opacity-700";
    const labelClasses = "self-start text-xl mb-2 text-gray-400";

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
            // const response = await axios.post(`http://localhost:8080/auth/checkUsername?username=${signupData.username}`);
            const response = await axios.post(`${deployedUrl}/auth/checkUsername?username=${signupData.username}`); // use for PROD 
            console.log(response.data);
            if(signupData.username != ""){
                setAvailableUsername(response.data);
            } else {
                setAvailableUsername(null);
            }    
        }
        catch (error){
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
            const response = await axios.post("http://localhost:8080/auth/signup",signupData);
            // const response = await axios.post(`${deployedUrl}/auth/signup`,signupData); // use for PROD 
            setUserData(response.data);
            localStorage.setItem("isLogged", true);
            navigate("/");
        }
        catch (error){
            localStorage.setItem("isLogged", false);
            console.error('Request failed:', error);
        }

    };

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
        <section className="text-white flex items-center justify-center bg-cover bg-linear-to-b from-blue-900/30 to-black w-full h-screen overflow-hidden shadow-xl">
            <motion.div initial={{ y:  animateOut ? 0 : -800 }} transition={{duration: 0.5, ease:"easeInOut"}} animate={{ y: animateOut ? -800 : 0 }}
                        onAnimationComplete={ handleLogin } className="m-8 border rounded-2xl items-center  w-140 h-170 flex flex-col bg-white/5  border-white/20 shadow-2xl backdrop-blur-md ">
                <div className="flex">
                    <div className="p-8 self-start">
                        <p className="text-md text-left text-gray-400 ">START FOR FREE</p>
                        <h1 className="text-2xl font-bold ">Create a new account.</h1>
                        <p className="text-md text-left text-gray-400">Enter your details below</p>
                    </div>

                    <div className="flex items-center">
                        <FontAwesomeIcon className="text-2xl text-blue-500" icon={faBrain} /> 
                        <h1 className="text-xl font-semibold text-transparent sm:text-2xl md:text-3xl  bg-linear-to-r from-blue-400 via-white to-blue-700 bg-clip-text"> InterviewPro</h1>
                    </div>
                </div>  

                <div className="flex flex-col items-center justify-center">
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

                    <button className={`p-3 font-semibold ${isDisabled ? "cursor-not-allowed bg-gray-800" : "cursor-pointer bg-blue-900 from-blue-950 to-blue-500 hover:bg-linear-to-tr" } text-white w-120 rounded-2xl`} 
                            disabled={isDisabled} onClick={handleSignup} >{signupClicked ? "Creating account...." : "Signup"}</button>
                </div>

                <h1 className="text-xl text-gray-400 py-8">Already have an account ? <button onClick={() => setAnimateOut(true)} className="underline cursor-pointer hover:text-white" >Login</button></h1>
            </motion.div>
        </section>
    </>)
}