import Hero from "@/components/homeSections/Hero";
import Homepage from "./homepage/page";

export default function Home() {
  return (
    <div className=" min-h-screen w-full flex flex-col">

      
      {/* Hero Carousel */}
      <Hero/>
      
      {/* Main Content */}
      <div className=" min-h-screen bg-[url('/images/bgs/homeBG-small.jpg')] lg:bg-[url('/images/bgs/homeBG-lg.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">

        <div className=" min-h-screen w-full bg-black/60">

          <Homepage/>
        </div>

      </div>

    </div>
  );
}
