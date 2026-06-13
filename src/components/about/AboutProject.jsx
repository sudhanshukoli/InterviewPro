import { motion } from "motion/react"

export default function AboutProject(){
    return(<>
        <section className="flex justify-center items-center text-white font-mono p-4 gap-20">
                    <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{  duration: 2,  ease: "easeInOut"  }}
                    className="text-left flex flex-col gap-8 w-120">
                        <p className="font-bold text-2xl bg-linear-to-r from-blue-700 to-blue-200 bg-clip-text text-transparent">OUR MISSION</p>
                        <h1 className="text-5xl">Level the playing field for every developer.</h1>
                        <p>Interview prep shouldn't cost ₹5,000/month. Great engineers fail interviews not because they're bad engineers
                             — but because they've never practiced with real, adaptive feedback.</p>

                        <p>We use Groq AI to simulate the sharpest interviewers in the industry — and unlike a mock-interview service,
                             we're available at midnight, free, whenever you are.</p>     
                    </motion.div>


                    <motion.div initial={{ x:200, opacity: 0}} whileInView={{ x:0, opacity: 1 }} viewport={{ once: true }} transition={{  duration: 2,  ease: "easeInOut"  }}
                                className="w-120 text-left flex flex-col gap-4 border rounded-2xl p-8 border-blue-400 text-blue-400 bg-blue-500/10">

                        <div className="flex gap-4 mb-8">
                            <div className="w-8 h-8 rounded-full items-center justify-center flex bg-linear-to-r from-blue-400 to-blue-900 shrink-0 text-sm">🤖</div>
                            <div className="font-mono flex-1 bg-gray-800/40 border border-gray-600 rounded-2xl rounded-tl-none p-4 text-left">
                                <p className="text-white font-semibold">Explain the Java memory model and how the happens-before relationship prevents data races.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 mb-8">
                            <div className="w-8 h-8 rounded-full items-center justify-center flex bg-gray-500/30 shrink-0 text-sm text-white">U</div>
                            <div className="font-mono flex-1 bg-gray-800/40 border border-gray-600 rounded-2xl rounded-tl-none p-4 text-left">
                                <p className="text-white font-semibold">The Java Memory Model defines visibility guarantees between threads using happens-before rules...</p>
                            </div>
                        </div>

                        <div className="flex gap-4 ">
                            <div className="w-8 h-8 rounded-full items-center justify-center flex bg-linear-to-r from-blue-400 to-blue-900 shrink-0 text-sm">🤖</div>
                            <div className="font-mono flex-1 bg-gray-800/40 border border-gray-600 rounded-2xl rounded-tl-none p-4 text-left">
                                <p className="text-white font-semibold">Score 8/10 — Strong answer! Mention volatile and synchronized for full marks.</p>
                            </div>
                        </div>

                    </motion.div>

                </section>
    </>)
}