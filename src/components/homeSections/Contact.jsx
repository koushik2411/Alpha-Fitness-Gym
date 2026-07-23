import React from 'react'

function Contact() {
  return (
    <div className=" p-8">

      {/* Form div */}
      <div className=" mx-auto md:w-140 p-8 flex flex-col gap-5 rounded-lg shadow-md shadow-red-900 backdrop-blur-sm bg-black/50">

        <div className=" flex flex-col gap-2">

          <label>
            Enter Your Name
          </label>

          <input
            type="text"
            placeholder="Your Name"
            className=" border p-2 rounded-lg outline-none"
          />

        </div>

        <div className=" flex gap-3 items-center">

          <label>
            Program
          </label>

          <select className=" border w-fit p-2 rounded-lg bg-black text-white">

            <option>Select Program</option>
            <option>Bodybuilding</option>
            <option>Cardio Fitness</option>
            <option>HIIT Training</option>
            <option>Weight Loss</option>
            <option>Nutrition Coaching</option>
            <option>Yoga</option>
            <option>Cross-Fit</option>

          </select>

        </div>

        <div className=" flex flex-col gap-2">

          <label>Enter Your Message</label>

          <textarea
            rows={5}
            placeholder="Type message here"
            className=" p-2 resize-none rounded-lg outline-none bg-black/50 border"
          />

        </div>

        <button 
          onClick={() => alert("Form submitted. Thanks for contacting us!")}
          className=" p-2 bg-linear-to-b from-red-900/90 to-red-700/90 rounded-lg active:scale-[0.97]"
        >
          Submit
        </button>

      </div>

    </div>
  )
}

export default Contact