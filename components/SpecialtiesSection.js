'use client';
import Image from 'next/image';
import headingPattern from '@/public/rev-img.png';

import specialtiesImage from '@/public/new-speciality-1.png';

const SpecialtiesSection = () => {
  return (
    <section className="md:py-16">
      <div className="container mx-auto px-4 flex flex-col gap-11 md:flex-row items-center">
        {/* Image on the left */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src={specialtiesImage}
            alt="Specialties Image"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text on the right */}
        <div className="w-full  md:w-1/2 text-center md:text-left">
          <div className="text-center mb-12 relative">
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
              <h2 className="text-3xl font-bold text-[#ffdc7c] mb-4 font-pirata-one tracking-widest relative z-10">
                OUR BEST SPECIALTIES
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
            <p className="text-white text-center font-thin mb-6">
              The taste is a natural glory to juicy and tender meat. Baking the meat adds charm to perfection. The taste is a fusion of classic and modern flavors with a combination of balanced spices to change the game for meat lovers.
            </p>
          </div>

          <div className="flex justify-center">
            <a href="#" className="relative w-max px-6 py-2 border border-[#ffdc7c] text-[#ffdc7c] font-semibold  hover:text-white transition-colors">
              View All            
            </a>
          </div>
        </div>
      </div>
    </section>

    
  );
};


export default SpecialtiesSection;
