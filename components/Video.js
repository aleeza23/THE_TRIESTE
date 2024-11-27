'use client';
import React from 'react';

const Video = () => {
  return (
    <section className="w-full md:h-[400px] overflow-hidden">
      <video
        className="w-full h-auto"
        src="/4781575-hd_1920_1080_25fps.mp4" 
        
        autoPlay
        muted
        loop
      />
    </section>
  );
};

export default Video;
