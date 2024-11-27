'use client'
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Link from 'next/link'; 
import 'keen-slider/keen-slider.min.css';
import bgImg from '@/public/banner02.webp';

const Home = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 2000,
    slidesPerView: 1,
    mode: 'free-snap',
    drag: true,
    created: () => {
      startAutoSlide();
    },
    dragStart: () => {
      stopAutoSlide();
    },
    dragEnd: () => {
      startAutoSlide();
    },
  });

  let timeout;
  function startAutoSlide() {
    timeout = setInterval(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, 8000);
  }

  function stopAutoSlide() {
    clearInterval(timeout);
  }

  return (
    <div className="relative h-[700px] w-full overflow-hidden">
      
      <div
        className="absolute w-[100vw] inset-0 left-0 right-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImg.src})`,
        }}
      />

      <div ref={sliderRef} className="keen-slider h-full ">
        <div className="keen-slider__slide flex items-center justify-center relative ">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="text-center text-white z-10 p-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Trieste</h1>
            <p className="text-lg md:text-xl mb-6 w-full md:w-[50%] mx-auto">
              Experience the finest dining in the heart of Trieste. 
              Enjoy an exquisite menu crafted from the freshest ingredients. 
              Book your table now for an unforgettable experience.
            </p>
            <Link href="/booking">
              <button className="  py-2 px-4 border border-[#ffdc7c] text-[#ffdc7c] font-semibold  hover:text-white transition-colors">
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
        <div className="keen-slider__slide flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="text-center text-white z-10 p-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Menu</h1>
            <p className="text-lg md:text-xl mb-6 w-full md:w-[50%] mx-auto">
              Discover the flavors that make us unique. 
              From appetizers to desserts, every dish is a delight. 
              View our menu and find your new favorite dish.
            </p>
            <Link href="/menu">
              <button className="  py-2 px-4 border border-[#ffdc7c] text-[#ffdc7c] font-semibold  hover:text-white transition-colors">
                VIEW MENU
              </button>
            </Link>
          </div>
        </div>
        <div className="keen-slider__slide flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="text-center text-white z-10 p-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us Today</h1>
            <p className="text-lg md:text-xl mb-6 w-full md:w-[50%] mx-auto">
              Have questions or need to make a reservation? 
              Our team is here to assist you with all your needs. 
              Reach out to us and we will be happy to help.
            </p>
            <Link href="/contact">
              <button className="  py-2 px-4 border border-[#ffdc7c] text-[#ffdc7c] font-semibold  hover:text-white transition-colors">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </div>

      <button
        className="arrow hidden md:block left-20"
        onClick={() => {
          slider.current && slider.current.prev();
        }}
      >
        &larr;
      </button>
      <button
        className="arrow hidden md:block right-20"
        onClick={() => {
          slider.current && slider.current.next();
        }}
      >
        &rarr;
      </button>
      <style jsx>{`
        .arrow {
          position: absolute;
          top: 50%;
          width: 30px;
          height: 30px;
          color: white;
          border: white;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s;
        }

        .arrow.left-0 {
          left: 10px;
        }

        .arrow.right-0 {
          right: 10px;
        }

        .arrow:hover {
          width: 40px;
          height: 40px;
        }

        .arrow::after {
          content: ' ';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid white;
        }

        .keen-slider__slide {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default Home;
