import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Restaurant Information Section */}
      <footer className="text-white py-8 mt-10">
        <div className="container mx-auto text-center">
          {/* Logo Section */}
          <div className="mb-6">
      <h1 className="text-6xl md:text-9xl text-center text-[#ffdc7c] font-pirata-one tracking-widest">THE TRIESTE</h1>
           
          </div>

          {/* Address and Contact Information */}
          <div className="space-y-8">
            {/* Islamabad Location */}
            <div>
              <h2 className="text-lg font-semibold">Address</h2>
              <p>The Trieste Restaurant & Fine dining, Baked Meat</p>
              <p>Cafe Trieste, Shop 16 A, Street 26, Business Bay Avenue DHA, Bahria Town Phase 7, Islamabad, Pakistan</p>
              <p>Call Us At:   0316 5201865</p>
            </div>

          </div>
        </div>
      </footer>

      {/* Social Media and Copyright Section */}
      <hr className="opacity-10" />
      <footer className="text-center py-8 px-0 bg-[#0f0f0f] container mx-auto text-white">
        <div className="container mx-auto ">
          <div className="flex justify-center mb-4">
            <Link href="https://web.facebook.com/trieste.islamabad/?_rdc=1&_rdr" className="mx-2 text-lg hover:text-yellow-300">
              <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/" className="mx-2 text-lg hover:text-yellow-300">
              <FaInstagram />
            </Link>
            <Link href="https://www.youtube.com/" className="mx-2 text-lg hover:text-yellow-300">
              <FaYoutube />
            </Link>
          </div>
          <p className="text-[#999] font-rambla">
            <small>
              © 2024 THE TRIESTE. Powered by{' '}
              <a target="_blank" className="no-underline text-yellow-300" href="https://thestockit.net/">
                The Stockit
              </a>
            </small>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
