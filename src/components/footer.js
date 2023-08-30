import React from 'react';
import Image from 'next/image';
import Logo from '../../public/Logo.png';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2948&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-black text-white py-10"
    >

      <div className="container mx-auto flex justify-center items-center mt-8">
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={100}
        />
        <h2 className='text-2xl text-white font-display'>The Future of Recruitment...</h2>
      </div>

      {/* Additional Footer Content */}

      {/* Copyright */}
      <div className="container mx-auto mt-8 text-center text-sm text-white font-display">
        &copy; {new Date().getFullYear()} LadderHills. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
