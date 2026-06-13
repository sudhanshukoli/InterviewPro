import { motion } from "motion/react";
import { skillesUsed } from "../../data/aboutData/valuesData";

export default function SkillsUsed(){
    return(<>
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
    </>)
}