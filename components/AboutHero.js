import Image from 'next/image';
import aboutLeft from '@/public/about-us-left.jpg';
import aboutRight from '@/public/about-us-right.jpg';
import aboutCenter from '@/public/Pattern-1.png';
import headingPattern from '@/public/rev-img.png';

const AboutHero = () => {


  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 relative">
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
            <h2 className="text-3xl font-bold text-[#ffdc7c] mb-4 font-pirata-one tracking-widest relative z-10">
              About Us
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
          <p className="text-white font-thin md:w-[40%] mx-auto w-full">
            Let us take you on a tasty tour to indulge in the aroma of magnificence and devour the elegance of modern dining with a combination of baked feasts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className=" shadow-md rounded-md">
            <Image
              src={aboutLeft}
              alt="Image 1"
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="p-4 shadow-md rounded-md">
            <Image
              src={aboutCenter}
              alt="Image 2"
              width={500}
              height={300}
              className="w-48 mx-auto h-auto object-cover rounded-md"
            />
          </div>
          <div className=" shadow-md rounded-md">
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
  );
};

export default AboutHero;
