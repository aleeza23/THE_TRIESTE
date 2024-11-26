import React from 'react';
import Conatiner from '@/components/Container';
import dynamic from 'next/dynamic';
import headingPattern from '@/public/rev-img.png';
import Image from 'next/image';
const Footer = dynamic(() => import('@/components/Footer'));

const ContactSection = () => {
    return (
        <Conatiner>
            <section className="text-white body-font   bg-[#0f0f0f] container mx-auto p-5 sm:p-10 md:p-16">
                <div className=" px-5 mt-32  mx-auto">
                    <div className="text-center mb-12 relative">
                        <h1 className="text-xl italic font-bold mb-3 text-white text-center font-pirata-one tracking-widest">Write to us</h1>
                        <div className="inline-block relative">
                            <div
                                //   ref={leftPatternRef}
                                className="absolute left-[-5rem] top-[35%] transform -translate-y-1/2 w-12 h-12"
                            >
                                <Image
                                    src={headingPattern}
                                    alt="Heading Pattern"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <h2 className="text-4xl  text-[#ffdc7c] mb-4  relative ">
                                CONTACT US
                            </h2>
                            <div
                                //   ref={rightPatternRef}
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
                        <p className="text-white md:w-[60%] w-full mx-auto text-lg text-center font-thin md:px-20  mb-6">
                            Let us take you on a tasty tour to indulge in the aroma of magnificence and devour the elegance of modern dining with a combination of baked feasts.
                        </p>                       
                    </div>
                    <div className="w-full h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13276.927425877522!2d73.04771271475966!3d33.55249154145251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf7375d79917%3A0x8c569e4187ea2b37!2sShope%2016A%2C%20Street%2026%2C%20Businesses%2C%20Business%20Bay%2C%20Sector%20F%20DHA%20Phase%201%2C%20Islamabad%2C%20Rawalpindi%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan-44000!5e0!3m2!1sen!2s!4v1698432570178!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                </div>
            </section>
            <Footer />
        </Conatiner>
    );
};

export default ContactSection;
