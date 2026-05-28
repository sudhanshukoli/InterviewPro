import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DIFFICULTIES } from "../../data/dashboardData/TechStack";

export default function InterviewLevelSelection({ stack, setTheStack }){

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

    return(<>
        <section className="flex flex-col justify-center items-center w-screen h-screen text-white">
            <div className="w-160 p-4">
                <div className="mb-8 text-left">
                    <button onClick={() => setTheStack(null)} className="text-gray-500 cursor-pointer"><FontAwesomeIcon icon={faArrowLeft} /> Back to Dahsboard</button>
                </div>

                
                {/* <div style={{ textAlign: "center", marginBottom: 40 }}> */}
                <div className="text-center mb-8">
                    <div className="text-5xl mb-4">{stack.icon}</div>
                    <h2 className="text-4xl font-bold tracking-tight">{stack.label} Interview</h2>
                    <p className="text-gray-500 mt-2" >{stack.desc}</p>
                </div>

                {/* Difficulty */}
                <div className="mb-8">
                    <p className="text-sm text-gray-500 mb-6 font-bold uppercase text-left ">Experience Level</p>
                    <div className="grid grid-cols-3 gap-4">
                        {DIFFICULTIES.map(d => (
                        <div key={d.id}
                            onClick={() => setDiff(d.id)} className={`cursor-pointer border-2 ${diff === d.id ? backgroundColors[d.color] : ""} ${diff === d.id ? borderColors[d.color] : "border-gray-700"} rounded-2xl px-10 py-5 text-center hover:-translate-y-1 ease-in-out transition-all`}>
                            <div className={`font-semibold text-xl ${diff === d.id ? textColors[d.color] : "text-white"} `}>{d.label}</div>
                            <div className="text-xs text-gray-500 mt-2" >{d.desc}</div>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Questions */}
                <div className="mb-8" >
                    <p className="text-sm text-gray-500 mb-6 font-bold uppercase text-left">Number of Questions</p>
                    <div className="flex gap-4">
                        {[3, 5, 8, 10].map(n => (
                        <button key={n} onClick={() => setQCount(n)} className={`flex-1 p-4 ${qCount === n ? "bg-linear-to-r from-blue-950 to-blue-600" : ""}
                            border ${qCount === n ? "border-0" : "border-gray-600"} rounded-2xl font-bold px-13 py-5 cursor-pointer text-xl`}>
                            {n}
                        </button>
                        ))}
                    </div>
                </div>

                <button className={` ${diff ? "opacity-100" : "opacity-50"} text-white text-xl font-semibold w-full p-4 rounded-2xl ${diff ? "cursor-pointer" : "cursor-not-allowed"} ${diff ? "bg-linear-to-r from-blue-950 to-blue-600" : "bg-gray-800" }`} >
                    Start Interview →
                </button>
            </div>
        </section>
    </>)
}