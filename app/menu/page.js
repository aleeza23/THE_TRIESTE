import dynamic from 'next/dynamic';
import Container from '@/components/Container';
import Image from 'next/image';
import bgImg from '@/public/people_s-comments.jpg';
import menu01 from '@/public/beef-brisket-big-our-menu.jpg';
import menu02 from '@/public/lamb-neckt-big-our-menu.jpg';
import menu03 from '@/public/lamb-ribs-big-our-menu.jpg';
import menu04 from '@/public/beef-ribs-1-1024x683.webp';
import menu05 from '@/public/lamb-shank-big-our-menu.jpg';
import headingPattern from '@/public/rev-img.png';
import MenuSection from '@/components/MenuSection';

// Dynamically import components
const ClientMenuItems = dynamic(() => import('@/components/ClientMenuItems'));
const Footer = dynamic(() => import('@/components/Footer'));

const MenuPage = () => {
  return (
    <Container>
      <ClientMenuItems>
        <Image
          src={bgImg}
          alt="Background Image"
          fill
          sizes="(min-width: 1980px) 1536px, (min-width: 1320px) calc(68.75vw + 189px), (min-width: 1040px) calc(21.15vw + 804px), (min-width: 780px) 768px, (min-width: 680px) 640px, calc(94.44vw + 17px)"
          className="object-cover w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white text-center font-pirata-one tracking-widest">Discover Our Delicious Menu</h1>
          <p className="text-lg mt-3 text-center text-white max-w-2xl px-3 lg:px-0">
            Savor the taste of flame-grilled perfection with every delicious bite. Our expertly crafted dishes are designed to tantalize your taste buds.
          </p>
        </div>
      </ClientMenuItems>

      <MenuSection
        title="The Trieste"
        subtitle="Beef Brisket"
        description="Experience the unique blend of garlic and spicy sauces along with a bowl of yogurt. We choose premium quality meat to bake at a fine heat. Along with a sprinkle of naturally refined herbs and spices, to create an enchanting blend to cast a spell on your tastebuds."
        imageSrc={menu01}
        index={0}
      />

      <div className="text-center mb-12 mt-28 relative">
        <h1 className="text-xl italic font-bold mb-2 text-white text-center font-pirata-one tracking-widest">The Trieste</h1>
        <div className="inline-block relative">
          <div className="absolute left-[-5rem] top-[45%] transform -translate-y-1/2 w-12 h-12">
            <Image src={headingPattern} alt="Heading Pattern" fill className="object-contain" />
          </div>
          <h2 className="text-3xl text-[#ffdc7c] mb-4 relative z-10">OUR BEST SPECIALTIES</h2>
          <div className="absolute right-[-5rem] top-[45%] transform -translate-y-1/2 w-12 h-12">
            <Image src={headingPattern} alt="Heading Pattern" fill className="object-contain" />
          </div>
        </div>
      </div>

      <MenuSection
        title="The Trieste"
        subtitle="Lamb Neck"
        description="The taste is a natural glory to juicy and tender meat. Baking the meat adds charm to perfection. The taste is a fusion of classic and modern flavors with a combination of balanced spices to change the game for meat lovers."
        imageSrc={menu02}
      />

      <MenuSection
        title="The Trieste"
        subtitle="Lamb Ribs"
        description="The hint of lemon along with the smokey taste is a fascinating flavor that adds delightful charm to the flavor of the meat. We serve a side of freshly chopped salad and sauces to upgrade the natural taste of the juicy ribs."
        imageSrc={menu03}
        index={2}
      />

<div className="text-center mb-12 mt-28 relative">
        <h1 className="text-xl italic font-bold mb-2 text-white text-center font-pirata-one tracking-widest">The Trieste</h1>
        <div className="inline-block relative">
          <div className="absolute left-[-5rem] top-[45%] transform -translate-y-1/2 w-12 h-12">
            <Image src={headingPattern} alt="Heading Pattern" fill className="object-contain" />
          </div>
          <h2 className="text-3xl text-[#ffdc7c] mb-4 relative z-10">OUR BEST SPECIALTIES</h2>
          <div className="absolute right-[-5rem] top-[45%] transform -translate-y-1/2 w-12 h-12">
            <Image src={headingPattern} alt="Heading Pattern" fill className="object-contain" />
          </div>
        </div>
      </div>

      <MenuSection
        title="The Trieste"
        subtitle="Beef Ribs"
        description="Indulge in the rich, smoky flavor of our slow-cooked beef ribs, seasoned to perfection and served with a side of tangy barbecue sauce. A treat for any meat lover."
        imageSrc={menu04}
      />

      <MenuSection
        title="The Trieste"
        subtitle="Lamb Shank"
        description="Our tender lamb shank is slow-cooked to perfection, infused with a blend of herbs and spices that bring out its natural flavors. Served with a rich, savory sauce."
        imageSrc={menu05}
        index={4}
      />

      <Footer />
    </Container>
  );
};

export default MenuPage;