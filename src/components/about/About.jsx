import { motion } from "motion/react";
import { skillesUsed, values } from "../../data/aboutData/valuesData";
import NavBar from "../common/NavBar";

export default function About(){

    const descText = "InterviewPro was born from rejection letters and 3am coding sessions. We've turned that frustration into the most honest, rigorous, free interview prep platform on the internet."

    return(<>

        <div className="bg-linear-to-b from-blue-900/30 to-black ">
            <NavBar/>
            
            <section className="w-full h-full pt-30 text-white flex flex-col justify-center items-center">
                <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{  duration: 2,  ease: "easeInOut"  }}
                className="mb-8 text-2xl border rounded-full px-4 py-2 font-bold border-blue-800 text-blue-400 bg-blue-900/20">Project Story</motion.div>
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{  duration: 1,  ease: "easeInOut"  }}
                className="text-6xl font-serif">Built by a developer who 
                <i className="bg-linear-to-r from-blue-700 to-blue-200 bg-clip-text text-transparent font-semibold"> failed</i> <br /> interviews.</motion.h1>
                    
                <div className="text-2xl font-sans pt-4 w-162">
                {descText.split("").map((char, index) => (
                    <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.02, duration: 0.01, }} >
                        {char}
                    </motion.span>
                ))}
                </div>    

                <hr className="w-full border-0 m-20 h-0.5 bg-blue-800/20" />

                <section className="flex justify-center items-center text-white font-mono p-4 gap-20">
                    <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1 }} transition={{  duration: 2,  ease: "easeInOut"  }}
                    className="text-left flex flex-col gap-8 w-120">
                        <p className="font-bold text-2xl bg-linear-to-r from-blue-700 to-blue-200 bg-clip-text text-transparent">OUR MISSION</p>
                        <h1 className="text-5xl">Level the playing field for every developer.</h1>
                        <p>Interview prep shouldn't cost ₹5,000/month. Great engineers fail interviews not because they're bad engineers
                             — but because they've never practiced with real, adaptive feedback.</p>

                        <p>We use Groq AI to simulate the sharpest interviewers in the industry — and unlike a mock-interview service,
                             we're available at midnight, free, whenever you are.</p>     
                    </motion.div>


                    <motion.div initial={{ x:200, opacity: 0}} whileInView={{ x:0, opacity: 1 }} transition={{  duration: 2,  ease: "easeInOut"  }}
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

                <hr className="w-full border-0 m-20 h-0.5 bg-blue-800/20" />
                    
                {/* our values section     */}
                <section className="flex flex-col gap-4">
                    <p className="font-bold text-xl bg-linear-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent">WHAT WE BELIEVE</p>
                    <i className="font-serif text-5xl mb-8">Our core values</i>

                    <div className="grid grid-cols-3 gap-10 mb-10" >
                        {values.map((v,i) => (
                            <motion.div initial={{ x:-50, opacity:0 }} whileInView={{x:0, opacity:1}} whileHover={{ y: -10 }} transition={{ delay:i*0.2, duration: 0.25 }} key={i}
                            className="flex flex-col gap-4 text-left p-4 py-6 border-l-4 rounded-2xl border-blue-400 w-100 hover:shadow-xl bg-gray-800/30 shadow-blue-900/50" >
                                <p className="text-4xl">{v.icon}</p>
                                <h1 className="text-2xl font-semibold ">{v.title}</h1>
                                <p className=" text-gray-500 ">{v.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <hr className="w-full border-0 m-20 h-0.5 bg-blue-800/20" />

                <section className="mb-8">

                    <p className="font-bold text-2xl bg-linear-to-r from-blue-700 to-blue-200 bg-clip-text text-transparent">BUILT WITH</p>

                    <div className="overflow-hidden w-6xl p-10 ">
                        <motion.div className="flex gap-4 w-max" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 15, ease: "linear", repeat: Infinity, }} >
                            {[...skillesUsed, ...skillesUsed].map((card, index) => (
                            <div key={index} className="text-gray-400 flex px-6 py-2 items-center justify-center rounded-4xl border border-blue-950 bg-blue-900/20" >
                                {card}
                            </div>
                            ))}
                        </motion.div>
                    </div>
                </section>    

            </section>

        </div>    
    </>)    

}