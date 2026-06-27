import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../context/TheUserContext.jsx";
import bgLogin from "../../data/images/bgLogin.jpg";
import useApi from "../../hooks/useApi.js";

export default function Login(){

    const { post } = useApi();

    const { setUserData } = useContext(UserContext);

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const [loginClicked, setLoginClicked] = useState(false);

    const [animateOut, setAnimateOut] = useState(false);

    const isDisabled = (!loginData.username.trim() || !loginData.password.trim());

    function handleChange(e){

        setLoginData({
            ...loginData, [e.target.name]: e.target.value
        });

    };


    async function handleLogin(){
        
        setLoginClicked(true);

        try{
            const theUserData = await post("/auth/login", loginData);
            console.log(theUserData);
            setUserData(theUserData);
            localStorage.setItem("isLogged", true);
            setAllItems(theUserData);
            navigate("/");
        } catch (error){
            setLoginClicked(false);
            alert("Wrong credentials");
            localStorage.removeItem("isLogged");
            console.error('Request failed:', error);
        }
        
    };
    
    function setAllItems(setUserData){
        localStorage.setItem("userFirstName", setUserData.name);
        localStorage.setItem("userId", setUserData.id);
        console.log(setUserData.name + "- this is user name");
        console.log(setUserData.id + "- this is user ID");
    }


    const handleSignup = () => {
            if (animateOut) {
            navigate("/signup");
        }
    }

    useEffect(() => {
        localStorage.removeItem("isLogged");
    }, []);
    
    function noSpace(e){
            if(e.key === " "){
            e.preventDefault();
        }

    }

    return(<>
        <section style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgLogin})`}}
                className="text-white flex items-center justify-center bg-cover bg-linear-to-b from-blue-900/30 to-black w-full h-screen overflow-hidden shadow-xl">
            <motion.div initial={{ y:  animateOut ? 0 : 800, opacity: animateOut ? 1 : 0 }} transition={{duration: 0.5, ease:"easeInOut"}} animate={{ y: animateOut ? 800 : 0, opacity: animateOut ? 0 : 1 }}
                        onAnimationComplete={ handleSignup }
                        className="m-8 border rounded-2xl items-center w-[80%] h-[60%]  md:w-140 md:h-170 flex flex-col  border-white/30 shadow-2xl backdrop-blur-sm ">
                
                <div className="flex p-4 ">
                    <div className="p-4 self-start">
                        <p className=" text-sm md:text-md text-left text-gray-400 ">Login your account</p>
                        <h1 className=" text-xl md:text-4xl text-left font-bold ">Welcome Back!</h1>
                        <p className=" text-sm md:text-md text-left text-gray-400">Enter your username and password</p>
                    </div>

                    <div className="flex items-center">
                        <FontAwesomeIcon className=" text-sm md:text-2xl text-blue-500" icon={faBrain} /> 
                        <h1 className="text-xl font-semibold text-transparent md:text-3xl  bg-linear-to-r from-blue-400 via-white to-blue-700 bg-clip-text"> InterviewPro</h1>
                    </div>
                </div>    

                <div className="flex flex-col items-center justify-center w-[80%]">
                    <label htmlFor="username" className="self-start text-sm md:text-xl mb-2 text-gray-400">Username</label>
                    <input className="float-left pl-12 mb-4 p-2 md:p-4 bg-transparent border rounded-2xl w-full md:w-120 border-gray-400 border-opacity-700" 
                            onChange={handleChange} value={loginData.username} type="text" name="username" placeholder="Enter your username" />

                    <label htmlFor="password" className="text-sm md:text-xl self-start mb-2 text-gray-400">Password</label>
                    <input onKeyDown={noSpace}  className="float-left pl-12 mb-5 md:mb-10 p-2 md:p-4 bg-transparent border rounded-2xl w-full md:w-120 border-gray-400 border-opacity-700"
                            onChange={handleChange} value={loginData.password} type="password" name="password" placeholder="Enter your password" />

                    <button disabled={isDisabled} className={`p-2 md:p-3 font-semibold ${isDisabled ? "cursor-not-allowed bg-gray-800" : "cursor-pointer bg-blue-900 from-blue-950 to-blue-500 hover:bg-linear-to-tr" } text-white w-full md:w-120 rounded-2xl`} 
                            onClick={handleLogin} >{loginClicked ? "Checking Creds...." : "Login"}</button>
                </div>

                <h1 className="text-sm md:text-xl text-gray-400 py-2 md:py-8">New here ? <button onClick={() => setAnimateOut(true)} className="underline cursor-pointer hover:text-white" >Register</button></h1>

                <hr className="w-[50%] my-2 border-0 h-0.5 bg-blue-800" />

                <p className="p-4 text-sm md:text-xl"> <i className="font-semibold">Welcome back!</i> The dedication you are showing right now is exactly what will set you apart from every other candidate.</p>
            </motion.div>
        </section>
    </>)
}