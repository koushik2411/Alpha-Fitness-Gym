import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { gallery } from '@/lib/gallery';
import { motion } from "framer-motion";
import Image from 'next/image';

function Gallery() {
  return (
    <div className=" m-5 lg:mx-auto lg:max-w-220 rounded-lg">

      <Carousel>

        <CarouselContent>

            {gallery.map((pic,id) => (
              
              <CarouselItem
                key={id}
                className={` pr-5`}
              >

                <motion.div
                  initial={{ scale: 0.85, opacity: 0}}
                  whileInView={{ scale: 1, opacity: 1}}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: false }}
                  className=" h-60 md:h-90 w-full relative"
                >

                  <Image
                    src={pic.image}
                    alt={pic.id}
                    fill
                    sizes="90vw"
                    loading="eager"
                    className=" object-cover rounded-lg"
                  />

                </motion.div>

              </CarouselItem>
            ))}


          
        </CarouselContent>

        <CarouselPrevious  className={` h-10 w-10`}/>
        <CarouselNext  className={` h-10 w-10`}/>

      </Carousel>

    </div>
  )
}

export default Gallery