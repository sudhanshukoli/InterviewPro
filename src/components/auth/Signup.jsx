import axios from "axios";
import { motion } from "motion/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import loginBg from "../../data/images/loginbg.png";

export default function Signup(){

    const deployedUrl = "https://interviewprobackend-1.onrender.com";

    const inputClasses = "float-left pl-12 mb-10 p-4 bg-transparent border rounded-lg w-120 border-purple-950 border-opacity-700";

    const navigate = useNavigate();

    const [signupData, setignupData] = useState({
        name: "",
        username: "",
        password: ""
    })

    function handleChange(e){

        setignupData({
            ...signupData, [e.target.name]: e.target.value
        });

    };

    async function handleSignup(){

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
            // const response = await axios.post("http://localhost:8080/auth/signup",signupData);
            const response = await axios.post(`${deployedUrl}/auth/signup`,signupData); // use for PROD 
            console.log(response.data);
            navigate("/");
            localStorage.setItem("isLogged", true);
        }
        catch (error){
            localStorage.setItem("isLogged", false);
            console.error('Request failed:', error);
        }

    };

    function noSpace(e){
            if(e.key === " "){
            e.preventDefault();
        }

    }

    return(<>
        <section className="flex items-center justify-start bg-cover bg-linear-to-r from-rose-300 to-white w-full h-screen overflow-hidden shadow-xl" style={{backgroundImage: `url(${loginBg})`}}>
            <motion.div initial={{x:-800}} transition={{duration: 0.5, ease:"easeInOut"}} animate={{x:0}} className="m-8 border rounded-2xl items-center  w-140 h-170 flex flex-col bg-white/20  border-white/20 shadow-2xl backdrop-blur-md ">
                <h1 className="text-4xl py-8 font-mono">SignUp</h1>

                <div className="flex flex-col items-center justify-center">
                    <label htmlFor="name" className="self-start text-2xl mb-2 font-mono">Name</label>
                    <input className={inputClasses} onChange={handleChange} value={signupData.name} type="text" name="name" placeholder="Your name" />

                    <label htmlFor="username" className="self-start text-2xl mb-2 font-mono">Username</label>
                    <input onKeyDown={noSpace} className={inputClasses} onChange={handleChange} value={signupData.username} type="text" name="username" placeholder="Username" />

                    <label htmlFor="password" className="self-start text-2xl mb-2 font-mono">Password</label>
                    <input onKeyDown={noSpace}  className={inputClasses} onChange={handleChange} value={signupData.password} type="password" name="password" placeholder="Password" />

                    <button className="p-3 font-semibold cursor-pointer text-white w-120 bg-blue-900 border border-blue-700 from-blue-950 to-blue-500 hover:bg-linear-to-tr font-railway rounded-xl" onClick={handleSignup} >SignUp</button>
                </div>

                <h1 className="text-2xl py-8 font-mono">Already have an account?<Link className="underline" to="/login">LogIn</Link></h1>
            </motion.div>
        </section>
    </>)
}