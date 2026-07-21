"use client"

import { useState } from "react";
import { motion } from "framer-motion";

function Bmi() {

     const [height, setHeight] = useState("");
     const [weight, setWeight] = useState("");
     const [result, setResult] = useState("");
     const [color, setColor] = useState("");
     const [remark, setRemark] = useState("");
     const [message, setMessage] = useState("Fill your details to check your BMI status.");

     // Calculate function
     const calculate = () => {
          let h = height;
          let w = weight;

          let bmi = (w/((h/100)*(h/100))).toFixed(2);

          if (bmi > 0 && bmi < 18.50) {
               setRemark("Underweight");
               setColor("#3b82f6")
               setMessage("Your weight is below normal, focus on a nutrient-dense diet and building strength.")
          } else if (bmi >= 18.50 && bmi <= 24.99) {
               setRemark("Normal");
               setColor("#22c55e")
               setMessage("Great job! Your weight is in a healthy, optimal range. Maintain it in the same range.")
          } else if (bmi >= 25 && bmi <= 29.99) {
               setRemark("Class I Obesity");
               setColor("#eab308")
               setMessage("You're slightly above the ideal range. A balanced diet and a regular activity will help you get back on track.")
          } else if (bmi >= 30 && bmi <= 39.99) {
               setRemark("Class II Obesity");
               setColor("#f59e0b")
               setMessage("Your BMI is in the higher range. Starting a structured exercise and wellness plan is recommended.")
          } else if (bmi > 40) {
               setRemark("Class III Obesity");
               setColor("#ef4444")
               setMessage("Your BMI ranges in health risk zone. It is recommended to adapt a healthy lifestyle along with medical consultation.")
          }

          setResult(bmi);
     }
     
     return(
          <motion.div
            initial={{ scale: 0.65, opacity: 0}}
            whileInView={{ scale: 1, opacity: 1}}
            transition={{ duration: 0.6}}
            viewport={{ once: false }} 
            className=" mx-auto p-5 flex flex-col md:flex-row gap-5 bg-black/45 shadow-md shadow-red-900 backdrop-blur-xs rounded-lg"
          >

              {/* Left Div for calculator */}
              <div className=" flex flex-col gap-5">

               <div className=" flex flex-col-reverse gap-1">

                    <input
                         type="number"
                         value={height}
                         onChange={(e) => setHeight(e.target.value.slice(0,3))}
                         placeholder="in cm"
                         className=" p-2 border rounded outline-none focus:border-2 focus:border-red-700"
                    />

                    <label>
                         Enter your height
                    </label>
               </div>

               <div className=" flex flex-col-reverse gap-1">

                    <input
                         type="number"
                         value={weight}
                         onChange={(e) => setWeight(e.target.value.slice(0,3))}
                         placeholder="in kg"
                         className=" p-2 border rounded outline-none focus:border-2 focus:border-red-700"
                    />

                    <label className=" font-semibold">
                         Enter your weight
                    </label>
               </div>

               <button 
                 onClick={calculate}
                 disabled={!height || !weight}
                 className=" mt-3 p-2 font-semibold bg-linear-to-b from-red-900 to-red-700/90 rounded-lg cursor-pointer disabled:cursor-not-allowed"
               >
                    Calculate
               </button>

              </div>

              {/* Right Div for result */}
              <div className=" p-5 md:w-85 flex flex-col gap-5 bg-linear-to-b from-red-900/60 to-red-700/60 text-white backdrop-blur-xs rounded-lg">

               <div className=" h-12 p-3 flex justify-between font-bold text-lg text-center bg-black/70 rounded">
                    
                    <h1 style={{ color: color}}>
                         {result}
                    </h1>

                    <p className=" font-semibold">
                         {remark}
                    </p>
               </div>

               <p className=" border h-full p-3 md:p-5 rounded">
                    {message}
               </p>

              </div>

          </motion.div>
     )
}

export default Bmi