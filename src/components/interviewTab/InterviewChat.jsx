import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import Feedback from "./Feedback";
import InterviewResult from "./InterviewResult";
import useApi from "../../hooks/useApi";

export default function InterviewChat ({ questions, setOpenChat, setTheStack, stack }){

    const { post } = useApi();

    const navigate = useNavigate();

    const [current, setCurrent] = useState(0);
    const textRef = useRef(null);
    const [answer, setAnswer] = useState("");
    const [evaluating, setEvaluating] = useState(false);
    const [openFeedback, setOPenFeedback] = useState(false);
    const [openResult, setOpenResult] = useState(false);
    const [aiFeedback, setAiFeedback] = useState({
      score: 0,
      feedback: ""
    });
    const [totalScore, setTotalScore] = useState(0);
    
    const sendData = {
        question: questions[current],
        answer: answer
    };

    console.log("This is total score " + totalScore);

    async function submitAnswer (){
      setEvaluating(true);
      
      console.log("Submitting answer");

      try{
        const aiFeedback = await post("/api/chat/getFeedback", sendData);
          setAiFeedback(aiFeedback);
          setOPenFeedback(true);
          setEvaluating(false);
          setCurrent(prev => prev+1);
      }
      catch (e){
        console.log(e);
        navigate("/error");
      }
      
    }

    function nextQuestion(){
      setTotalScore(prev => prev + Number(aiFeedback.score));
      setOPenFeedback(false);
      setAnswer("");
      if(current >= questions.length){
        setOpenResult(true);
      }
    }

    const progress = ((current) / questions.length) * 100;

    return(<>
      {openResult && (<InterviewResult totalScore={totalScore} questions={questions} setOpenChat={setOpenChat} setTheStack={setTheStack} stack={stack} />)}

      {openFeedback && (<Feedback score={aiFeedback.score} feedback={aiFeedback.feedback} answer={answer} nextQuestion={nextQuestion} questions={questions} current={current} />)}

      { (!openFeedback && !openResult) && (<>
      
      <div style={{ height: 3, background: "#21262D" }}>
        <div style={{ height: "100%", background: "linear-gradient(90deg, #6366F1, #8B5CF6)", width: `${progress}%`, transition: "width 0.5s ease", borderRadius: "0 2px 2px 0" }} />
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 32px" }}>
            <div style={{ animation: "slide-up 0.4s ease" }}>

                <div className="flex gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full items-center justify-center flex bg-linear-to-r from-blue-400 to-blue-900 shrink-0 text-xl">🤖</div>
                  <div className="font-mono flex-1 bg-gray-800/40 border border-gray-600 rounded-2xl rounded-tl-none p-6 text-left">
                      <p className="text-gray-400 text-sm font-semibold uppercase mb-2">Question {current + 1}</p>
                      <p className="text-white font-semibold">{questions[current]}</p>
                  </div>
                </div>
              
                <div>
                  <label className="text-left" style={{ fontSize: 13, color: "#8B949E", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: 12 }}>Your Answer</label>
                  <textarea className="answer-area" ref={textRef} value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Type your answer here... Be as detailed as possible for a higher score."
                      rows={6}
                      style={{ width: "100%", padding: "16px", background: "#0D1117", border: "1px solid #30363D", borderRadius: 14, color: "#E6EDF3", fontSize: 15, lineHeight: 1.7, fontFamily: "'Sora',sans-serif", resize: "vertical" }} />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                  <button className="submit-btn" onClick={submitAnswer} disabled={!answer.trim() || evaluating}
                      style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 28px", background: "linear-gradient(135deg, #6366F1, #8B5CF6)", border: "none", borderRadius: 12, color: "white", fontSize: 15, fontWeight: 700, cursor: answer.trim() && !evaluating ? "pointer" : "not-allowed", fontFamily: "'Sora',sans-serif", opacity: !answer.trim() || evaluating ? 0.6 : 1 }}>
                      {evaluating ?  <motion.div animate={{ rotate: 360 }} transition={{  duration: 2, ease: "easeInOut",  repeat: Infinity, }} ><FontAwesomeIcon  icon={faSpinner} /></motion.div> : <FontAwesomeIcon icon={faPaperPlane} />}
                      {evaluating ? "Evaluating..." : "Submit Answer"}
                  </button>
                </div>
            </div>
        </div>
        </>)}
    </>)
}