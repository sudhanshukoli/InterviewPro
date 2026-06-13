import { motion } from "motion/react";

export default function TopIntro({ theData }){
    return(<>
        <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{  duration: 2,  ease: "easeInOut"  }}
                className="mb-8 text-2xl border rounded-full px-4 py-2 font-bold border-blue-800 text-blue-400 bg-blue-900/20">{theData.head}</motion.div>
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{  duration: 1,  ease: "easeInOut"  }}
                className="text-6xl font-serif">{theData.title}
                <i className="bg-linear-to-r from-blue-700 to-blue-200 bg-clip-text text-transparent font-semibold"> {theData.lastWord} </i> </motion.h1>
                    
                <div className="text-2xl font-sans pt-4 w-162">
                {theData.descText.split("").map((char, index) => (
                    <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.02, duration: 0.01, }} >
                        {char}
                    </motion.span>
                ))}
                </div>
    </>)
}