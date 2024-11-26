'use client'
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  // State to manage the visibility of the "Go to top" button
  const [isVisible, setIsVisible] = useState(false);

  // Hook to handle the scroll event
  useEffect(() => {
    // Function to handle scroll and show/hide the button
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Adding event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top smoothly
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* "Go To Top" Button */}
      {isVisible && (
        <button
          id="to-top-button"
          onClick={goToTop}
          title="Go To Top"
          className="fixed z-50 bottom-10 right-0 p-3  w-10 h-10 rounded-full shadow-md border border-[#ffdc7c] text-white text-lg font-semibold flex justify-center items-center transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
          </svg>          
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
