import { motion } from "motion/react";
import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";

export default function Dashboard(){

    const { get } = useApi();

    const borderColors = {
        orange: "border-orange-500",
        blue: "border-blue-500",
        lime: "border-lime-500"
    };

    const [statData, setStatData] = useState({
        sessionsDone: 0,
        avgScore: 0,
        techStacks: 0
    });

    useEffect(() => {
         const getDashboardData = async () => {

            try{
                const theDashData = await get(`/result/get-dashboard-data?userId=${localStorage.getItem("userId")}`);
                setStatData(theDashData);
            } catch(e){
                console.log(e);
            }
        };

        getDashboardData();
    }, [])

    return(<>
        <div className="m-auto p-10"> 
            <motion.div initial={{opacity: 0}} transition={{duration: 1, ease: "easeInOut"}} animate={{ opacity: 1 }} className="text-left">
                <h2 className="text-4xl font-bold mb-4 text-white">
                    Welcome back, <span className="bg-linear-to-r from-blue-700 to-blue-200 bg-clip-text text-transparent">{localStorage.getItem("userFirstName")}</span> 👋
                </h2>
                <p className="text-gray-600 font-mono">Ready to ace your next tech interview?</p>
            </motion.div>

            <div className="flex gap-30 my-8">
            {[
                { label: "Sessions Done", value: statData.sessionsDone, icon: "📋", color: "blue" },
                { label: "Avg Score", value: `${Math.round(statData.avgScore)}/10`, icon: "⭐", color: "orange" },
                { label: "Tech Stacks", value: statData.techStacks, icon: "🛠️", color: "lime" },
            ].map((stat, i) => (
                <motion.div initial={{ y:40, opacity: 0}} transition={{duration: 0.5, delay: i*0.2,  ease: "easeInOut"}} animate={{y: 0, opacity: 1}}
                            key={i} className={` bg-gray-800/30 border-t border-b rounded-2xl ${borderColors[stat.color]} p-10 w-50 m-auto md:w-100`}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{stat.icon}</div>
                <div style={{ fontSize: 32, fontWeight: 800, color: stat.color }}>{stat.value}</div>
                <div style={{ fontSize: 13, color: "#8B949E", marginTop: 4 }}>{stat.label}</div>
                </motion.div>
            ))}
            </div>
        </div>
    </>)

}