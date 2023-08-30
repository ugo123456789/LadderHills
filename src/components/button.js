import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";

const Button = ({ name, link }) => {
  const controls = useAnimation();

  const buttonVariants = {
    initial: {
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.05, // Slightly scale up on hover
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleHoverStart = () => {
    controls.start('hover');
  };

  const handleHoverEnd = () => {
    controls.start('initial');
  };
	return (
		<Link
			href={link}
			class="relative z-10 flex min-h-[auto] min-w-[auto] px-6 py-5 bg-[#935d4b] cursor-pointer
    opacity-100 backdrop-blur transition duration-200 ease-linear text-white text-lg leading-[180%] capitalize
    ">
			<motion.button
       variants={buttonVariants}
       initial="initial"
       whileHover="hover"
       animate={controls}
       onMouseEnter={handleHoverStart}
       onMouseLeave={handleHoverEnd}
				className="relative font-display text-base leading-[100%] font-normal tracking-[.16em] ">
				{name}
			</motion.button>

			<BsArrowRight className="ml-2 animate-pulse" />
		</Link>
	);
};

export default Button;
