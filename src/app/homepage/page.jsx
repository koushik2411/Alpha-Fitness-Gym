"use client"

import Bmi from "@/components/homeSections/Bmi";
import Testimonials from "@/components/homeSections/Testimonials";
import { facilities } from "@/lib/facilitiesData";
import { homePrograms } from "@/lib/programs";
import { statData } from "@/lib/stats";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Homepage() {
  
  return (
    <div className=" p-4 flex flex-col gap-3">

        {/* Stats */}
        <section
          className=" p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-y-2 border-red-800"
        >
          
          {statData.map((stat, id) => (

            <motion.div
              initial={{ y: 50, opacity: 0}}
              whileInView={{ y: 0, opacity: 1}}
              transition={{ duration: 1}}
              viewport={{ once: false}}
              key={stat.id}
              className=" p-8 flex flex-col items-center justify-center gap-3 bg-black/45 backdrop-blur-xs border-2 border-red-900 rounded-lg shadow-md shadow-red-900 hover:bg-red-950/50"
            >
              
              <h1 className=" text-4xl font-bold bg-linear-to-b from-red-900 to-red-500 bg-clip-text text-transparent">
                {stat.count}
              </h1>

              <p className=" text-sm font-semibold">
                {stat.title}
              </p>

            </motion.div>
          ))}
        </section>
        
        {/* Fitness Article */}
        <section className=" p-3 md:p-8 pb-8 border-b-2 border-red-800">
            
            <div className=" p-3 flex flex-col gap-3 text-slate-200 shadow-md shadow-red-900 rounded-lg backdrop-blur-xs bg-black/45">

                <h1 className=" text-red-600 text-lg font-semibold border-b text-center">
                  Fitness Is a Lifestyle, Not a Destination
                </h1>

                <p>
                  Every workout is a step toward a stronger, healthier version of yourself. Whether you're building muscle, losing weight, or simply improving your overall well-being, consistency is the key to lasting results.
                </p>

                <p>
                  At our gym, we believe fitness is more than lifting weights, it's about creating healthy habits, staying motivated, and pushing beyond your limits. With expert trainers, modern equipment, and a supportive community, you'll have everything you need to stay on track.
                </p>

                <p>
                  Start today. Stay committed. Become your strongest self.
                </p>
            </div>

        </section>

        {/* Facilities */}
        <section className=" p-3 md:p-8 pb-8 border-b-2 border-red-800 flex flex-col gap-5">
          
          <h1 className=" mx-auto w-fit font-bold text-lg">
            OUR <span className=" text-red-600">FACILITIES</span>

            <div className=" w-full h-1 bg-red-600/70 rounded-[55%]"></div>
          </h1>

          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-transparent">

            {facilities.map((facility, id) => (

              <motion.div
                initial={{ y: 50, opacity: 0}}
                whileInView={{ y: 0, opacity: 1}}
                transition={{ duration: 0.5}}
                viewport={{ once: false}}
                whileHover={{ scale: 1.04 }}
                key={id}
                className=" p-5 flex flex-col items-center justify-center gap-5 rounded-lg shadow-md shadow-red-900  hover:bg-red-900/30 bg-black/45 backdrop-blur-xs text-center"
              >
                
                <h1 className=" text-5xl text-red-50">
                  {facility.icon}
                </h1>

                <p>
                  {facility.title}
                </p>

              </motion.div>

            ))}
          </div>
        </section>

        {/* Programs */}
        <section className=" p-3 md:p-8 pb-8 border-b-2 border-red-800 flex flex-col gap-5">

          <h1 className=" mx-auto w-fit font-bold text-lg">
            OUR <span className=" text-red-600">PROGRAMS</span>

            <div className=" w-full h-1 bg-red-600/70 rounded-[55%]"></div>
          </h1>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">

            {homePrograms.map((program, id) => (

              <motion.div
                initial={{ y: 50, opacity: 0}}
                whileInView={{ y: 0, opacity: 1}}
                transition={{ duration: 0.5}}
                viewport={{ once: false}}
                whileHover={{ scale: 1.03 }}
                key={id}
                className=" p-5 flex flex-col items-center justify-center gap-3 rounded-lg shadow-md shadow-red-900 backdrop-blur-xs bg-black/45 hover:bg-red-900/30"
              >
                
                <img
                  src={program.image}
                  alt={program.title}
                  className=" rounded"
                />

                <h1 className=" text-red-600 font-semibold text-center">
                  {program.title}
                </h1>

                <p className=" text-sm">
                  {program.desc}
                </p>

              </motion.div>
            ))}

          
            <motion.div
              initial={{ y: 50, opacity: 0}}
              whileInView={{ y: 0, opacity: 1}}
              transition={{ duration: 0.5}}
              viewport={{ once: false}}
              className=" h-50 md:h-auto flex flex-col items-center justify-center gap-5 rounded-lg bg-linear-to-b from-red-900/60 to-red-700/60 text-center active:scale-[0.97] backdrop-blur-xs"
            >
                
              <Link href="/programs" className=" h-full w-full flex flex-col items-center justify-center gap-3 font-semibold">
                
                <FaArrowAltCircleRight className=" text-4xl text-red-600 animate-bounce"/>
                Explore All Programs
              </Link>

            </motion.div>

          </div>

        </section>

        {/* BMI Calculator */}
        <section className=" p-3 md:p-8 pb-8 border-b-2 border-red-800 flex flex-col gap-5">

          <h1 className=" mx-auto w-fit font-bold text-lg">
            KNOW YOUR <span className=" text-red-600">BMI</span>

            <div className=" w-full h-1 bg-red-600/70 rounded-[55%]"></div>
          </h1>

          <Bmi/>

        </section>
        
        {/* Testimonials */}
        <section className=" p-3 md:p-8 pb-8 border-b-2 border-red-800 flex flex-col gap-5">

          <h1 className=" mx-auto w-fit font-bold text-lg">
            MEMBERS' <span className=" text-red-600">TESTIMONIALS</span>

            <div className=" w-full h-1 bg-red-600/70 rounded-[55%]"></div>
          </h1>

          <Testimonials/>
          
        </section>

        {/* Gallery */}

        {/* Contact */}

    </div>
  )
}

export default Homepage