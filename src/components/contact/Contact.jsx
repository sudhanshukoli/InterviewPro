import { motion } from "motion/react";
import { contactCardData, contactData, socialsCardData } from "../../data/contactData/contactData";
import TopIntro from "../about/TopIntro";
import NavBar from "../common/NavBar";
import ContactCard from "./ContactCard";


export default function Contact(){

    return(<>
        <div className="bg-linear-to-b from-blue-900/30 to-black mb-24 ">
            <NavBar/>

            <section className="w-full h-full pt-30 text-white flex flex-col justify-center items-center">
                <TopIntro theData={contactData} />
                
                <hr className="w-full border-0 m-20 h-0.5 bg-blue-800/20" />

                <div className="flex justify-center items-center gap-10">
                    <div className="flex flex-col gap-10" >
                    {contactCardData.map((cardData, i) => (
                            <motion.div key={i} initial={{ x:-50, opacity:0 }} whileInView={{x:0, opacity:1}} viewport={{ once: true }} transition={{ delay:i*0.2, duration: 0.25 }} 
                                        className="w-100 border flex gap-4 border-gray-600 p-6 rounded-2xl bg-blue-900/10 shadow-blue-900/50 hover:border-blue-600 hover:shadow-2xl hover:-translate-y-2 hover:transition-transform hover:duration-300">
                                <ContactCard contactData={cardData} />
                            </motion.div>
                    ))} 

                    <motion.div initial={{ x:-50, opacity:0 }} whileInView={{x:0, opacity:1}} viewport={{ once: true }} transition={{ delay:2*0.2, duration: 0.25 }} 
                                className="w-100 border flex gap-4 border-gray-600 p-6 rounded-2xl bg-green-900/10 shadow-green-900/50 hover:border-green-600 hover:shadow-2xl hover:-translate-y-2 hover:transition-transform hover:duration-300">
                        <div className="border border-green-400/50 rounded-full justify-center bg-green-600/30 items-center p-2 m-4" />

                        <div className="text-left">
                            <h1 className="text-green-600 font-bold">Team online</h1>
                            <p className="text-sm text-gray-600">Avg response time: under 24h</p>
                        </div>
                    </motion.div>    
 
                    </div>

                    <div className=" border flex border-gray-600 p-12 rounded-2xl bg-blue-900/5 ">
                        <div>
                            <h1 className="text-left mb-4 text-2xl font-bold text-gray-500">FOLLOW US</h1>
                            <div className="grid grid-cols-2 gap-10">
                                {socialsCardData.map((cardData, i) => (
                                    <motion.div key={i} initial={{ scale:0, opacity:0 }} whileInView={{scale: 1, opacity:1}} viewport={{ once: true }} transition={{ delay:i*0.2, duration: 0.25 }} 
                                                className="border flex gap-4 border-gray-600 p-6 rounded-2xl bg-blue-900/10 shadow-blue-900/50 hover:border-blue-600 hover:shadow-2xl hover:scale-105 hover:bg-blue-900/20 hover:transition-transform hover:duration-300">
                                        <ContactCard contactData={cardData} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </>)
}