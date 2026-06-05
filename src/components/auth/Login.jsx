import axios from "axios";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import loginBg from "../../data/images/loginbg.png";

export default function Login(){
    
    const deployedUrl = "https://interviewprobackend-1.onrender.com";


    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    function handleChange(e){

        setLoginData({
            ...loginData, [e.target.name]: e.target.value
        });

    };

    async function handleLogin(){

            // localStorage.setItem("isLogged", true);
            navigate("/");

        try{
            // const response = await axios.post("http://localhost:8080/auth/login",loginData);
            const response = await axios.post(`${deployedUrl}/auth/login`,loginData); // use for PROD 
            console.log(response.data);
            navigate("/");
            localStorage.setItem("isLogged", true);
        }
        catch (error){
            localStorage.setItem("isLogged", false);
            console.error('Request failed:', error);
        }

    };

    useEffect(() => {
        localStorage.removeItem("isLogged");
    }, []);
    
    function noSpace(e){
            if(e.key === " "){
            e.preventDefault();
        }

    }

    return(<>
        <section className="flex items-center justify-end bg-cover bg-linear-to-r from-rose-300 to-white w-full h-screen overflow-hidden shadow-xl" style={{backgroundImage: `url(${loginBg})`}}>
            <motion.div initial={{x:800}} transition={{duration: 0.5, ease:"easeInOut"}} animate={{x:0}} className="m-8 border rounded-2xl items-center  w-140 h-170 flex flex-col bg-white/20  border-white/20 shadow-2xl backdrop-blur-md ">
                <h1 className="text-4xl py-8 font-mono">LogIn</h1>

                <div className="flex flex-col items-center justify-center">
                    <label htmlFor="username" className="self-start text-2xl mb-2 font-mono">Username</label>
                    <input className="float-left pl-12 mb-10 p-4 bg-transparent border rounded-lg w-120 border-purple-950 border-opacity-700" onChange={handleChange} value={loginData.username} type="text" name="username" placeholder="username" />

                    <label htmlFor="password" className="self-start text-2xl mb-2 font-mono">Password</label>
                    <input onKeyDown={noSpace}  className="float-left pl-12 mb-10 p-4 bg-transparent border rounded-lg w-120 border-purple-950 border-opacity-700" onChange={handleChange} value={loginData.password} type="password" name="password" placeholder="password" />

                    <button className="p-3 font-semibold cursor-pointer text-white w-120 bg-blue-900 border border-blue-700 from-blue-950 to-blue-500 hover:bg-linear-to-tr font-railway rounded-xl" onClick={handleLogin} >Login</button>
                </div>

                <h1 className="text-2xl py-8 font-mono">New here?<Link className="underline" to="/signup" >Register</Link></h1>
            </motion.div>
        </section>
    </>)
}