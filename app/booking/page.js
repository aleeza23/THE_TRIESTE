import Container from '@/components/Container'
import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import bookingBanner from '@/public/banner-Booking.webp'
import headingPattern from '@/public/rev-img.png';



const Footer = dynamic(() => import('@/components/Footer'));

const BookingPage = () => {
    return (
        <Container>
            <div className="relative w-full h-[400px] overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={bookingBanner}
                        alt='About Us Banner'
                        layout='fill'
                        objectFit='cover'
                        quality={100}
                        priority={true}
                        className="bg-fixed bg-center bg-cover"
                    />
                </div>
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-20'>
                    <h1 className='text-white text-4xl font-bold font-pirata-one tracking-widest'>Booking</h1>
                </div>
            </div>
            <div className='bg-[#0f0f0f] container mx-auto'>
           {/* add google reviews  */}
           <section className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-64 md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26587.41797559202!2d73.04500952590098!3d33.52698560520639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed9e6b2c9c8f%3A0xd4b3c8e8e672ee32!2sCaf%C3%A9%20Trieste!5e0!3m2!1sen!2s!4v1638032752145!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center p-6 bg-[#0f0f0f] text-white rounded-md shadow-md">
        <div className="text-center mb-12 relative">
        <h1 className="text-xl italic font-bold text-white text-center font-pirata-one tracking-widest">Visit Us</h1>
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
            <h2 className="text-3xl  text-[#ffdc7c] mb-4  relative z-10">
            FIND US
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
          <h2 className="text-3xl font-thin  text-[#ffdc7c] my-5  relative z-10">
            The Trieste
            </h2>
          <p className="text-white text-lg text-center font-thin md:px-20  mb-6">
          Cafe Trieste, Shop 16 A, Street 26, Business Bay Avenue DHA, Bahria Town Phase 7, Islamabad, Pakistan
          </p>
          <p>0316 5201865</p>
        </div>
        </div>
      </div>
    </section>
            </div>
            <Footer />
        </Container>
    )
}

export default BookingPage;
