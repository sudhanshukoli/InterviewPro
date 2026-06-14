import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useState } from "react";
import { DIFFICULTIES } from "../../data/dashboardData/TechStack";
import useApi from "../../hooks/useApi";
import InterviewChat from "../interviewTab/InterviewChat";
import Loader from "./Loader";
import TopBar from "./TopBar";

export default function InterviewLevelSelection({ stack, setTheStack }){

    const { post } = useApi();

    const borderColors = {
        red: "border-red-600",
        yellow: "border-yellow-600",
        green: "border-green-600"
    };

    const backgroundColors = {
        red: "bg-red-500/10",
        yellow: "bg-yellow-500/10",
        green: "bg-green-500/10"
    };

    const textColors = {
        red: "text-red-600",
        yellow: "text-yellow-600",
        green: "text-green-600"
    };

    const [diff, setDiff] = useState(null);
    const [qCount, setQCount] = useState(5);
    const [openChat, setOpenChat] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [showLoader, setShowLoader] = useState(false)

    async function startInterview(){

        setShowLoader(true);        
        
        const allQuestions = await post("/api/chat/getQuestions",
                {
                    techStack: stack.label,
                    difficulty: diff,
                    questions: qCount
                });
         
        setShowLoader(false);

        setQuestions(allQuestions);    

        setOpenChat(true);
    }

    
    return(<>
        {showLoader ? <Loader questionCount={qCount} difficulty={diff} stack={stack} />
        
        : !openChat ? 
        (<section className="flex z-10 flex-col justify-center items-center w-screen h-screen text-white">
            <motion.div initial={{y:10, opacity:0}} transition={{ duration: 0.5, ease: "easeInOut"}} animate={{y:0, opacity:1}} className=" w-[80%] md:w-160 p-4">
                <div className="mb-8 text-left">
                    <button onClick={() => setTheStack(null)} className="text-gray-500 cursor-pointer"><FontAwesomeIcon icon={faArrowLeft} /> Back to Dahsboard</button>
                </div>

                
                {/* <div style={{ textAlign: "center", marginBottom: 40 }}> */}
                <div className="text-center mb-8">
                    <div className="text-3xl md:text-5xl mb-4">{stack.icon}</div>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">{stack.label} Interview</h2>
                    <p className="text-gray-500 mt-2" >{stack.desc}</p>
                </div>

                {/* Difficulty */}
                <div className="mb-8">
                    <p className="text-xs md:text-sm text-gray-500 mb-6 font-bold uppercase text-left ">Experience Level</p>
                    <div className="grid grid-cols-3 gap-4">
                        {DIFFICULTIES.map(d => (
                        <div key={d.id}
                            onClick={() => setDiff(d.id)} className={`cursor-pointer border-2 ${diff === d.id ? backgroundColors[d.color] : ""}
                             ${diff === d.id ? borderColors[d.color] : "border-gray-700"} rounded-2xl md:px-10 py-5 text-center hover:-translate-y-1 ease-in-out transition-all`}>
                            <div className={`font-semibold text-sm md:text-xl ${diff === d.id ? textColors[d.color] : "text-white"} `}>{d.label}</div>
                            <div className="text-xs text-gray-500 mt-2" >{d.desc}</div>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Questions Below */}
                <div className="mb-8" >
                    <p className="text-xs md:text-sm text-gray-500 mb-6 font-bold uppercase text-left">Number of Questions</p>
                    <div className="flex gap-4">
                        {[3, 5, 8, 10].map(n => (
                        <button key={n} onClick={() => setQCount(n)} className={`flex-1 p-4 ${qCount === n ? "bg-linear-to-r from-blue-950 to-blue-600" : ""}
                            border ${qCount === n ? "border-0" : "border-gray-600"} rounded-2xl font-bold md:px-13 py-5 cursor-pointer text-xl hover:-translate-y-1 ease-in-out transition-all`}>
                            {n}
                        </button>
                        ))}
                    </div>
                </div>

                <button onClick={startInterview}
                    className={` ${diff ? "opacity-100" : "opacity-50"} text-white text-xl font-semibold w-full p-4 rounded-2xl 
                    ${diff ? "cursor-pointer" : "cursor-not-allowed"} ${diff ? "bg-linear-to-r from-blue-950 to-blue-600" : "bg-gray-800" }
                    hover:-translate-y-1 ease-in-out transition-all`} >
                    Start Interview →
                </button>
            </motion.div>
        </section>) : 
        (<>
            <TopBar setOpenChat={setOpenChat} stack={stack} difficulty={diff} questions={questions} />
            <InterviewChat setOpenChat={setOpenChat} questions={questions} setTheStack={setTheStack} stack={stack} /> 
        </>) }
    </>)
}