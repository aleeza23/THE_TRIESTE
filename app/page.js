import Home from '@/components/Home';
import dynamic from 'next/dynamic';

import AboutHero from '@/components/AboutHero';
import Testimonials from '@/components/Testimonials';
import Video from '@/components/Video';
import SpecialtiesSection from '@/components/SpecialtiesSection';
const Container = dynamic(() => import('@/components/Container'), {
  ssr: false,
});
const Footer = dynamic(() => import('@/components/Footer'));




const HomePage = () => {

  return (
    <Container>
       <Home />
      <div className="relative container mx-auto border-l border-[#ffdc7c] border-opacity-20 border-r px-16 lg:ms-auto h-auto overflow-hidden">
       <AboutHero />
      
      </div>
      <Video />

      <div className="relative container mx-auto border-l border-[#ffdc7c] border-opacity-20 border-r px-16 lg:ms-auto h-auto overflow-hidden">
     
         
     {/* <Features /> */}
     <Testimonials />
     <SpecialtiesSection />
     </div>
     <Footer />

    </Container>
  );
}

export default HomePage;
