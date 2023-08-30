"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = ({Isrc}) => {
	const [isOpen, setIsOpen] = useState(false);

	//Handles the opening and closing of our nav
	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className="relative z-[100] flex max-w-[100vw] mx-auto top-0 justify-between items-center">
            <Link href={'/'} className="cursor-pointer">
            <Image
				src={Isrc}
                
				alt="logo"
				style={{
					width: "10rem", // Set the desired width for the logo
					height: "auto", // Automatically adjust the height to maintain aspect ratio
				}}
			/>
            </Link>

			{/* <button
				onClick={handleClick}
				className="flex flex-col justify-center items-center !mr-10">
				<span
					className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-24 rounded-sm ${
											isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
										}`}></span>
				<span
					className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-24 rounded-sm my-0.5 ${
											isOpen ? "opacity-0" : "opacity-100"
										}`}></span>
				<span
					className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-24 rounded-sm ${
											isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
										}`}></span>
                                    </button> */}
		</nav>
	);
};

export default Navbar;
