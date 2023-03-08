import React from 'react'
import { Carousel } from 'flowbite-react'

export const ProductSlide = (args) => {
    return (
        <div className="mt-12 grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel indicators={false}>
          <img
            src="../../../product/display_baju.png"
            alt="Baju Display"
            />
           <img
            src="../../../product/display_baju2.png" 
            alt="Baju Display"
            />
        </Carousel>
        <Carousel indicators={false}>
          <img
            src="../../../product/display_hiasan_2.png" 
            alt="..."
          />
          <img
              src="../../../product/display_hiasan.png" 
            alt="..."
          />
        </Carousel>
      </div>
    )
}
