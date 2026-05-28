import { motion } from "motion/react";

import { STACKS } from "../../data/dashboardData/TechStack";

export default function TechSelection(){

    const borderColors = {
        red: "border-red-600",
        fuchsia: "border-fuchsia-600",
        violet: "border-violet-600",
        teal: "border-teal-600",
        lime: "border-lime-600",
        orange: "border-orange-600",
        blue: "border-blue-600",
        pink: "border-pink-600",
        purple: "border-purple-600",
        green: "border-green-600"
    };

    return(<>
        {/* Stack Selection */}
        <div className="m-auto px-10"> 
            <h3 className="text-white text-2xl text-left font-bold font-mono">Choose Your Tech Stack</h3>
            <p className="text-left text-gray-500 font-xl mb-10">Select a technology to start your AI-powered interview session</p>

            <div className="grid grid-cols-4 gap-10 mb-10" >
            {STACKS.map((stack, i) => (
                <motion.div initial={{y:20, opacity: 0}} animate={{ y:0, opacity: 1 }} transition={{  duration: 1, delay: i*0.2,  ease: "easeInOut"  }}
                             key={stack.id} className={` bg-gray-800/30 border-t border-b ${borderColors[stack.color]} rounded-2xl p-10 `}
                onClick={() => console.log("We have to create fun to start interview")}>

                    <motion.div animate={{ y: [0, -10, 0] }} transition={{  duration: 2,  repeat: Infinity, delay: i*0.2,  ease: "easeInOut"  }}
                                className="text-4xl mb-4 inline-block">{stack.icon}</motion.div>
                    <div className="font-bold text-xl text-white mb-2">{stack.label}</div>
                    <div className="text-sm text-gray-400" style={{ lineHeight: 1.5 }}>{stack.desc}</div>
                    <div className="mt-4 h-0.5 rounded-2xl" style={{  background: `linear-gradient(90deg, ${stack.color}, transparent)` }} />
                </motion.div>
            ))}
            </div>
        </div>
    </>)
}