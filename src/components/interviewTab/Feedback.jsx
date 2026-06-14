import { motion } from "motion/react";

export default function Feedback({ score, feedback, answer, nextQuestion, questions, current }){
    return(<>
        <section className="w-screen h-screen flex items-center justify-center">
            <motion.div initial={{y:10, opacity:0}} transition={{ duration: 0.5, ease: "easeInOut"}} animate={{y:0, opacity:1}} className="w-160 p-4 m-auto text-white">
                {/* Score */}
                <div className="text-white " style={{ textAlign: "center", marginBottom: 40 }}>
                    <div className={` ${score <=5 ? "text-red-500" : "text-green-500"}`} style={{ fontSize: 64, fontWeight: 800, lineHeight: 1 }}>{score}</div>
                    <div style={{ color: "#8B949E", fontSize: 16, marginTop: 4 }}>out of 10</div>
                </div>

                {/* AI Feedback */}
                <div style={{ background: "#0D1117", border: "1px solid #21262D", borderRadius: 16, padding: "24px", marginBottom: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                        <span style={{ fontSize: 20 }}>🤖</span>
                        <span style={{ fontWeight: 700, fontSize: 16 }}>AI Feedback</span>
                    </div>
                    <p className="text-left" style={{ color: "#C9D1D9", lineHeight: 1.8, fontSize: 15 }}>{feedback}</p>
                </div>

                {/* Your answer recap */}
                <div style={{ background: "#0D1117", border: "1px solid #30363D", borderRadius: 16, padding: "20px", marginBottom: 24 }}>
                    <p className="text-left" style={{ fontSize: 12, color: "#8B949E", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>Your Answer</p>
                    <p className="text-left" style={{ color: "#C9D1D9", lineHeight: 1.7, fontSize: 14, fontFamily: "'JetBrains Mono', monospace" }}>{answer}</p>
                </div>

                <button className="next-btn" onClick={nextQuestion}
                style={{ width: "100%", padding: "16px", background: "#161B22", border: "1px solid #30363D", borderRadius: 14, color: "#E6EDF3", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora',sans-serif" }}>
                {current >= questions.length ? "See Final Results 🏁" : `Next Question (${current + 1}/${questions.length}) →`}
                </button>
            </motion.div>
        </section>
    </>)
}