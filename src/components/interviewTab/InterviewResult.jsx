import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InterviewResult({ totalScore, questions, setOpenChat, setTheStack }) {

    const avg = Math.round(totalScore/questions.length);
    const grade = avg >= 9 ? "S" : avg >= 7 ? "A" : avg >= 5 ? "B" : avg >= 3 ? "C" : "D";
    const gradeColor = { S: "text-green-500", A: "text-blue-500", B: "text-yellow-500", C: "text-orange-500", D: "text-red-500" }[grade];
    const msg = { S: "Outstanding! You're interview-ready! 🚀", A: "Excellent performance! 🎉", B: "Good effort, keep refining! 💪", C: "Keep practicing! 📚", D: "More study needed. Don't give up! 🔄" }[grade];
    return(<>
        <div className="p-4 flex justify-center gap-10 items-center flex-col " style={{ minHeight: "100vh", background: "#0A0A0F", fontFamily: "'Sora', sans-serif", color: "#E6EDF3" }}>
            <section className="text-white font-mono">
                <div className="text-4xl mb-4 font-bold" >Results!</div>
                <div className="text-2xl" >Your average is <b className={`${gradeColor}`}>{avg}</b> / 10</div>
                <h1 className="mb-4">{msg}</h1>
                <h2 className="text-sm font-sans text-red-400">(Note - Please don't depened on this reult for now, <br /> though you can reffer the questions asked for your preperations)</h2>
            </section>

            {/* Actions */}
            <div className="w-96 justify-self-center m-4" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <button onClick={() => setOpenChat(false)} style={{ padding: "16px", background: "linear-gradient(135deg, #6366F1, #8B5CF6)", border: "none", borderRadius: 14, color: "white", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora',sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                    <FontAwesomeIcon icon={faArrowsRotate} /> Try Again
                </button>
                <button onClick={()=> setTheStack(null)} style={{ padding: "16px", background: "#0D1117", border: "1px solid #30363D", borderRadius: 14, color: "#E6EDF3", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora',sans-serif" }}>
                    Back to Dashboard
                </button>
            </div>
        </div>
    </>)
}