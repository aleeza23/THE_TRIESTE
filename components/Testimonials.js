'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import rightImg from '@/public/people_s-comments.jpg';
import qouteIcon from '@/public/quote-mark.png';



const reviews = [
  {
    text: "I just went to The Trieste, and man, it was amazing! Had their chili beef dry, herbs kitchen steak, French onion chicken and soup with garlic bread – all delicious! The taste was so good, and the place had a great vibe. Definitely recommend trying it out!",
  },
  {
    text: "Absolutely loved the dining experience at The Trieste! The ambiance is perfect, and the steak was cooked to perfection. Will definitely be back for more!",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <section className="relative  grid grid-cols-1 md:grid-cols-2 gap-4 md:pb-14 container mx-auto overflow-hidden h-screen">
        {/* Left Section: Testimonials */}
        <div className="relative flex items-center justify-center px-4 z-20">
          <div ref={sliderRef} className="keen-slider">
            {reviews.map((review, index) => (
              <div className="keen-slider__slide" key={index}>
                <div className="flex flex-col items-center mb-4 h-full">
                  <Image
                    src={qouteIcon}
                    alt="quote icon"
                    width={50}
                    height={50}
                    className="mb-4"
                  />
                  <p className="text-xl lg:text-2xl text-white mb-8 w-full lg:w-[50%] text mx-auto lg:max-w-2xl font-pirata-one tracking-widest">{review.text}</p>
                  {/* Numbers for navigation */}
                  {loaded && instanceRef.current && (
                    <div className="mt-auto flex justify-center mb-4">
                      {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            instanceRef.current?.moveToIdx(idx);
                          }}
                          className={`text-white mx-2 text-lg ${currentSlide === idx ? 'border-b-2 border-yellow-400 border-double' : ''}`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="relative items-center hidden md:flex justify-center h-full">
          <Image
            src={rightImg}
            alt="People's Comments"
           fill
            priority
            className=""
          />
        </div>
      </section>

    </>
  );
};

export default Testimonials;
