import { faArrowLeft, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DIFFICULTIES } from "../../data/dashboardData/TechStack";

export default function TopBar({setOpenChat, stack, difficulty, questions}){
    return(<>
        <div className="px-6 py-4 border-b border-gray-700 flex items-center justify-between backdrop-blur-md sticky top-0 z-10 ">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={() => setOpenChat(false)} className="bg-none text-gray-600 cursor-pointer flex items-center gap-4 text-xl">
            <FontAwesomeIcon icon={faArrowLeft} /> 
          </button>
          <span className="text-xl">{stack.icon}</span>
          <span className="text-xl font-bold text-white" >{stack.label}</span>
          <span className={`text-sm font-semibold px-3 py-1 rounded-2xl ${difficulty === "junior" ? "bg-green-500/10" : difficulty === "mid" ? "bg-yellow-500/10" : "bg-red-500/10"} 
                            ${difficulty  === "junior" ? "text-green-600" : difficulty === "mid" ? "text-yellow-600" : "text-red-600"}`}>
            {DIFFICULTIES.find(d => d.id === difficulty)?.label}
          </span>
        </div>
        <div className="font-bold text-sm text-gray-600">
          Total Questions - {questions.length}
        </div>
      </div>
    </>)
}