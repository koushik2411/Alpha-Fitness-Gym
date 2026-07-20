"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/testimonials";

function Testimonials() {
     return(
          <div className=" m-5 mx-auto md:max-w-220 rounded-lg">

               <Carousel
                 className={` rounded-lg`}
               >

                    <CarouselContent
                      className={` gap-3 rounded-lg`} 
                    >

                         {testimonials.map((tm, index) => (

                              <CarouselItem 
                                key={index}
                                className={` rounded-lg`}
                              >
                                   <div className=" p-5 h-full w-full flex flex-col gap-5 rounded-lg bg-linear-to-b from-red-900/60 to-red-700/60 relative backdrop-blur-xs">

                                        <p>
                                             {tm.desc}
                                        </p>

                                        <div className=" flex flex-col items-end">
                                             <h2 className=" text-amber-400 font-bold">
                                                  {tm.memberName}
                                             </h2>

                                             <h3 className=" text-xs">
                                                  {tm.program}
                                             </h3>

                                        </div>

                                        <p className={` absolute bottom-5 left-5 ${tm.rating >= 3.5 ? "text-green-500" : "text-red-600"} font-bold`}>
                                             ⭐ {tm.rating}
                                        </p>

                                   </div>
                              </CarouselItem>
                         ))}
                    </CarouselContent>

                    <CarouselPrevious className={`h-10 w-10`}/>
                    <CarouselNext className={` h-10 w-10`}/>

               </Carousel>

          </div>
     )
}

export default Testimonials