import { FaFire, FaUserTie, FaWifi } from "react-icons/fa";
import { FaCar, FaDumbbell, FaPersonRunning, FaShower } from "react-icons/fa6";
import { GiForkKnifeSpoon, GiMeditation } from "react-icons/gi";
import { IoMdClock } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";
import { PiLockers } from "react-icons/pi";

export const facilities = [
     {
          id: 1,
          title: "Strength Training",
          icon: <FaDumbbell/>,
     },
     {
          id: 2,
          title: "Cardio Zone",
          icon: <FaPersonRunning/>,
     },
     {
          id: 3,
          title: "Personal Training",
          icon: <FaUserTie/>,
     },
     {
          id: 4,
          title: "Nutrition Guidance",
          icon: <IoFastFood/>,
     },
     {
          id: 5,
          title: "Yoga & Meditation",
          icon: <GiMeditation/>,
     },
     {
          id: 6,
          title: "Functional Training",
          icon: <FaFire/>,
     },
     {
          id: 7,
          title: "Locker Rooms",
          icon: <PiLockers/>,
     },
     {
          id: 8,
          title: "Cafeteria",
          icon: <GiForkKnifeSpoon/>,
     },
     {
          id: 9,
          title: "Free Parking",
          icon: <FaCar/>,
     },
     {
          id: 10,
          title: "Free Wi-Fi",
          icon: <FaWifi/>,
     },
     {
          id: 11,
          title: "24/7 Access",
          icon: <IoMdClock/>,
     },
     {
          id: 12,
          title: "Shower",
          icon: <FaShower/>,
     },
]