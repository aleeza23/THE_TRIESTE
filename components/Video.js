'use client';
import React from 'react';

const Video = () => {
  return (
    <section className="w-full md:h-[400px] overflow-hidden">
      <video
        className="w-full h-auto"
        src="/carnivore-landscape-new_1.mp4" 
        
        autoPlay
        muted
        loop
      />
    </section>
  );
};

export default Video;
