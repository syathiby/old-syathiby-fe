import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { API_URL, get } from '../../../middleware/services/api';

const CarouselComponent = () => {
  const [banner, setBanner] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get('v1/banner');
        setBanner(response.slice(0, 5));
      } catch (error) {
        console.error('Error Fetching Data', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % banner.length;
      setActiveIndex(nextIndex);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [activeIndex, banner.length]);

  return (
    <div className="container flex flex-col px-4 mx-auto space-y-6 lg:h-[32rem] py-8 lg:py-16 lg:flex-row lg:items-center">
      <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
        <div className="hidden sm:flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
          {banner.map((_, index) => (
            <Indicator
              key={index}
              onClick={() => setActiveIndex(index)}
              isSelected={index === activeIndex}
            />
          ))}
        </div>

        <div className="max-w-xs hidden sm:block sm:mx-12 lg:mx-12 lg:order-2">
          <Carousel
            autoPlay
            infiniteLoop
            interval={5000}
            // transitionTime={200}
            swipeable
            emulateTouch
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            selectedItem={activeIndex}
            onChange={setActiveIndex}
          >
            {banner.map((bannerData) => (
              <div className='mx-1' key={bannerData.id}>
                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 text-left dark:text-white lg:text-4xl">
                  {bannerData.title}
                </h1>
                <p className="mt-4 text-gray-600 text-left dark:text-gray-300">
                  {bannerData.caption}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          // transitionTime={900}
          swipeable
          emulateTouch
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          selectedItem={activeIndex}
          onChange={setActiveIndex}
        >
          {banner.map((bannerData) => (
            <Link key={bannerData.link} to={bannerData.link}>
              {/* Use Link component from React Router */}
              <div key={bannerData.id}>
                <img
                  key={bannerData.id}
                  className="object-cover w-full h-full max-w-2xl rounded-md"
                  src={`${API_URL}/upload/Banner/${bannerData.image}`}
                  alt={bannerData.link}
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const Indicator = ({ onClick, isSelected }) => (
  <button
    className={`w-3 h-3 mx-2 rounded-full lg:mx-0 focus:outline-none ${
      isSelected ? 'bg-blue-500' : 'bg-gray-300'
    }`}
    onClick={onClick}
  ></button>
);

export default CarouselComponent;
