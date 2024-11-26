import Image from "next/image";
import headingPattern from '@/public/rev-img.png';

const MenuSection = ({ index, title, subtitle, description, imageSrc }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="container md:ms-auto items-center grid grid-cols-1 mt-14 md:mt-20 md:grid-cols-2 gap-4">
      {isEven ? (
        <>
          <div className="text-center mb-12  relative order-2 md:order-1">
            <h1 className="text-xl italic font-bold mb-3 text-white text-center font-pirata-one tracking-widest">{title}</h1>
            <div className="inline-block relative">
              <div className="absolute left-[-5rem] top-[45%] transform -translate-y-1/2 w-12 h-12">
                <Image src={headingPattern} alt="Heading Pattern" fill className="object-contain" />
              </div>
              <h2 className="text-3xl text-[#ffdc7c] mb-4 relative z-10">{subtitle}</h2>
              <div className="absolute right-[-5rem] top-[45%] transform -translate-y-1/2 w-12 h-12">
                <Image src={headingPattern} alt="Heading Pattern" fill className="object-contain" />
              </div>
            </div>
            <p className="text-white text-center font-thin mb-6 md:px-14">{description}</p>
            <div className="flex justify-center">
              <a href="#" className="relative w-max px-6 py-2 border border-[#ffdc7c] text-[#ffdc7c] font-semibold hover:text-white transition-colors">View All</a>
            </div>
          </div>
          <div className="relative h-64 md:h-[600px] order-1 md:order-2">
            <Image src={imageSrc} alt={subtitle} fill className="object-cover border-2 border-[#ffdc7c] md:h-auto md:w-full" />
          </div>
        </>
      ) : (
        <>
          <div className="relative h-64 md:h-[600px] order-1 ">
            <Image src={imageSrc} alt={subtitle} fill className="object-cover border-2 border-[#ffdc7c] md:h-auto md:w-full" />
          </div>
          <div className="text-center mb-12 relative order-2">
            <h1 className="text-xl italic font-bold mb-3 text-white text-center font-pirata-one tracking-widest">{title}</h1>
            <div className="inline-block relative">
              <div className="absolute left-[-5rem] top-[45%] transform -translate-y-1/2 w-12 h-12">
                <Image src={headingPattern} alt="Heading Pattern" fill className="object-contain" />
              </div>
              <h2 className="text-3xl text-[#ffdc7c] mb-4 relative z-10">{subtitle}</h2>
              <div className="absolute right-[-5rem] top-[45%] transform -translate-y-1/2 w-12 h-12">
                <Image src={headingPattern} alt="Heading Pattern" fill className="object-contain" />
              </div>
            </div>
            <p className="text-white text-center font-thin mb-6 md:px-14">{description}</p>
            <div className="flex justify-center">
              <a href="#" className="relative w-max px-6 py-2 border border-[#ffdc7c] text-[#ffdc7c] font-semibold hover:text-white transition-colors">View All</a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuSection;
