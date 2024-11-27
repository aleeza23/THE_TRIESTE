'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import qouteIcon from '@/public/quote-mark.png';
import headingPattern from '@/public/rev-img.png';


const reviews = [
    {
        text: "I just went to The Trieste, and man, it was amazing! Had their chili beef dry, herbs kitchen steak, French onion chicken and soup with garlic bread – all delicious! The taste was so good, and the place had a great vibe. Definitely recommend trying it out!",
    },
    {
        text: "Absolutely loved the dining experience at The Trieste! The ambiance is perfect, and the steak was cooked to perfection. Will definitely be back for more!",
    },
];

const AboutTestimonial = () => {
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
        loop: true,
        slides: {
            perView: 1,
        },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 3000);
        return () => clearInterval(interval);
    }, [instanceRef]);

    return (
        <section className="relative flex flex-col items-center justify-center h-screen bg-[#0f0f0f]">

            <div className="text-center relative">
            <h1 className="text-xl italic font-bold text-white text-center font-pirata-one tracking-widest">The Trieste</h1>
                <div className="inline-block relative">
                    <div
                        className="absolute left-[-5rem] top-[35%] transform -translate-y-1/2 w-12 h-12"
                    >
                        <Image
                            src={headingPattern}
                            alt="Heading Pattern"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h2 className="text-3xl mb-4  text-[#ffdc7c] relative z-10">
                        OUR CUSTOMERS
                    </h2>
                    <div
                        className="absolute right-[-5rem] top-[35%] transform -translate-y-1/2 w-12 h-12"
                    >
                        <Image
                            src={headingPattern}
                            alt="Heading Pattern"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>

            <div className="relative flex items-center justify-center w-full max-w-2xl">
                {loaded && instanceRef.current && (
                    <button
                        onClick={() => instanceRef.current?.prev()}
                        className="absolute left-2 md:-left-14 z-10 text-4xl   text-[#ffdc7c] p-2 rounded-full hover:bg-gray-300 transition"
                    >
                        &#10094;
                    </button>
                )}
                <div ref={sliderRef} className="keen-slider w-full">
                    {reviews.map((review, index) => (
                        <div className="keen-slider__slide flex justify-center" key={index}>
                            <div className="flex flex-col items-center mb-4 h-full w-full">
                                <Image
                                    src={qouteIcon}
                                    alt="quote icon"
                                    width={50}
                                    height={50}
                                    className="mb-4"
                                />
                                <p className="text-xl lg:text-2xl text-white mb-8 w-full text-center font-pirata-one tracking-widest">
                                    {review.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {loaded && instanceRef.current && (
                    <button
                        onClick={() => instanceRef.current?.next()}
                        className="absolute right-2 md:-right-14 z-10 text-4xl   text-[#ffdc7c] p-2 rounded-full font-thin transition"
                    >
                        &#10095;
                    </button>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="flex justify-center mt-4">
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
        </section>
    );
};

export default AboutTestimonial;
