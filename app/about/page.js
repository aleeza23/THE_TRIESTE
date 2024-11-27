import Container from '@/components/Container'
import React from 'react'
import aboutLeft from '@/public/about-us-left.jpg';
import aboutRight from '@/public/about-us-right.jpg';
import headingPattern from '@/public/rev-img.png';
import dynamic from 'next/dynamic'
import Image from 'next/image'
import aboutBanner from '@/public/about02.jpg'
import AboutTestimonial from '@/components/AboutTestimonial';



const Footer = dynamic(() => import('@/components/Footer'));

const AboutPage = () => {
    return (
        <Container>
            <div className="relative w-full h-[400px] overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={aboutBanner}
                        alt='About Us Banner'
                        layout='fill'
                        objectFit='cover'
                        quality={100}
                        priority={true}
                        className="bg-fixed bg-center bg-cover"
                    />
                </div>
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-20'>
                    <h1 className='text-white text-4xl font-bold font-pirata-one tracking-widest'>About Us</h1>
                </div>
            </div>
            <div className='bg-[#0f0f0f] container mx-auto'>
                <section className="py-16 relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-5 md:mb-0 relative">
                            <div className="inline-block relative">
                                <div
                                    className="absolute left-[-5rem] top-[45%] transform -translate-y-1/2 w-12 h-12"
                                >
                                    <Image
                                        src={headingPattern}
                                        alt="Heading Pattern"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                <h2 className="text-3xl font-bold text-[#ffdc7c] font-pirata-one tracking-widest relative z-10">
                                    About Us
                                </h2>
                                <div
                                    className="absolute right-[-5rem] top-[45%] transform -translate-y-1/2 w-12 h-12"
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4 shadow-md rounded-md">
                                <Image
                                    src={aboutLeft}
                                    alt="Image 1"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto object-cover rounded-md"
                                />
                            </div>
                            <div className="p-12 text-white font-thin text-center">
                                <p>For the very first time in the world, experience the luxury of dining out like never before. Live cooking and extraordinary taste to perfection.</p>
                                <p className='my-6'>Indulge in an unparalleled dining adventure where every dish is a masterpiece, crafted with precision and passion.</p>
                                <p>Join us for a unique culinary journey that promises to delight your senses and elevate your dining experience to new heights.</p>
                            </div>



                            <div className="p-4 shadow-md rounded-md">
                                <Image
                                    src={aboutRight}
                                    alt="Image 3"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto object-cover rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <AboutTestimonial />
            </div>
            <Footer />
        </Container>
    )
}

export default AboutPage
