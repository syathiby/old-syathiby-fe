import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselComponent = () => {
  return (
    <div className="container flex flex-col px-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
            </div>

            <div className="max-w-lg lg:mx-12 lg:order-2">
                <Carousel
                    autoPlay
                    infiniteLoop
                    interval={3000}
                    swipeable
                    emulateTouch
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                >
                    <div>
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800 text-left dark:text-white lg:text-4xl">The best Apple Watch apps</h1>
                        <p className="mt-4 text-gray-600 text-left dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                    </div>
                </Carousel>
            </div>
        </div>
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                swipeable
                emulateTouch
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                showIndicators={false}
            >
                <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1605860632725-fa88d0ce7a07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="apple watch photo" />
                <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo" />
            </Carousel>
        </div>
    </div>
  )
}

export default CarouselComponent
