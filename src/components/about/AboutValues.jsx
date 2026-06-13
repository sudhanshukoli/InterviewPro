import { motion } from "motion/react";
import { values } from "../../data/aboutData/valuesData";

export default function AboutValues(){
    return(<>
        <section className="flex flex-col gap-4">
                    <p className="font-bold text-xl bg-linear-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent">WHAT WE BELIEVE</p>
                    <i className="font-serif text-5xl mb-8">Our core values</i>

                    <div className="grid grid-cols-3 gap-10 mb-10" >
                        {values.map((v,i) => (
                            <motion.div initial={{ x:-50, opacity:0 }} whileInView={{x:0, opacity:1}} viewport={{ once: true }} transition={{ delay:i*0.2, duration: 0.25 }} key={i}
                            className="flex flex-col gap-4 text-left p-4 py-6 border-l-4 rounded-2xl border-blue-400 w-100 hover:shadow-xl hover:-translate-y-5 hover:transition-transform hover:duration-300 bg-gray-800/30 shadow-blue-900/50" >
                                <p className="text-4xl">{v.icon}</p>
                                <h1 className="text-2xl font-semibold ">{v.title}</h1>
                                <p className=" text-gray-500 ">{v.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
    </>)
}