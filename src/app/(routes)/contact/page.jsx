"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import { HiArrowLongDown } from "react-icons/hi2";
import handshake from "../../../../public/handshake.jpeg";
import Logo from "../../../../public/LogoDark.png";
import { motion } from "framer-motion";

const contact = () => {
	const quote = {
		initial: {
			opacity: 1,
		},
		animate: {
			opacity: 1,
		},
	};

	const singleWord = {
		initial: {
			opacity: 0,
			y: 50,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.3,
				duration: 1,
			},
		},
	};
	return (
		<>
			<main className="overflow-hidden mt-0 pb-0 bg-gradient-to-b from-[#fff8f1] to-white">
				<Navbar Isrc={Logo} />
				<div className="px-4 md:px-10 lg:px-20 xl:px-32 mx-auto max-w-screen-2xl">
					<div className="w-full md:w-[900px] mt-12 md:mt-20 mb-12 md:mb-24 mx-auto text-center">
						<motion.div
							variants={quote}
							initial="initial"
							animate="animate"
							className="relative z-1 ">
							<motion.h1
								variants={singleWord}
								className="text-2xl md:text-7xl md:max-lg:text-4xl md:max-lg:mr-40 font-light">
								let's stay in touch
							</motion.h1>
						</motion.div>
						<div className="pt-10 md:pt-16 flex pb-16 md:pb-24 justify-center text-center">
							<HiArrowLongDown size={60} className="animate-bounce md:max-lg:mr-40" />
						</div>
						<div className="flex flex-col md:flex-row">
							<div className="flex-1 text-center md:text-start">
								<h2>office</h2>
								<div className="text-[#4e4f57] text-lg md:text-xl leading-normal md:leading-loose">
									<p>26 Dublin Street Edinburgh</p>
									<p>EH3 6NN Scotland</p>
								</div>
							</div>
							<div className="flex-1 mt-6 md:mt-0 text-center mr- md:text-end md:max-lg:mr-[13.5rem]">
								<h2>contact</h2>
								<div className="text-[#4e4f57] text-lg md:text-xl mr- leading-normal md:leading-loose">
									<p>info@ladderhills.com</p>
								</div>
							</div>
						</div>
						<section className="flex flex-col md:flex-row pt-20 md:pt-28 pb-24 w-full gap-10 items-center md:items-start justify-center">
							<div className="relative overflow-hidden w-full md:w-1/2 h-[300px] md:h-[700px] md:max-lg:hidden">
								<Image
									className="absolute w-full h-full object-cover "
									src={handshake}
								/>
							</div>
							<div className="w-full md:w-1/2 md:max-lg:w-[100%]">
								<h2 className="text-center md:text-left">how can we help?</h2>
								<div className="text-center md:text-left w-full mt-8">
									<form
										action="https://getform.io/f/50308645-e8f8-49ad-bbca-07bccc8b96e8"
										method="POST"
										className="block mx-auto md:max-lg:mr-52">
										<input
											type="text"
											name="name"
											placeholder="Your Name"
											required
											className="w-full outline-none mb-4 md:mb-8 py-3 md:py-6 px-2 md:px-4 border-t-0 border-black border-solid border-r-0 border-b-[0.5px] border-b-[#bebebe] bg-transparent text-[#626262] text-lg md:text-xl leading-normal md:leading-loose tracking-[0.005em]"
										/>
										<input
											type="email"
											name="email"
											placeholder="Email Id"
											required
											className="w-full outline-none mb-4 md:mb-8 py-3 md:py-6 px-2 md:px-4 border-t-0 border-black border-solid border-r-0 border-b-[0.5px] border-b-[#bebebe] bg-transparent text-[#626262] text-lg md:text-xl leading-normal md:leading-loose tracking-[0.005em]"
										/>
										<textarea
											type="textarea"
											name="message"
											placeholder="Message"
											required
											className="w-full outline-none mb-8 md:mb-12 pt-2 md:pt-4 px-2 md:px-4 pb-10 border-t-0 border-black border-solid border-r-0 border-b-[0.5px] border-b-[#bebebe] bg-transparent text-[#626262] text-lg md:text-xl leading-normal md:leading-loose tracking-[0.005em]"></textarea>
										<button className="w-full text-white pt-2 md:pt-3 pb-3 md:pb-5 px-4 md:px-8 bg-[#935d4b] text-lg md:text-xl leading-normal md:leading-loose tracking-[0.16rem] uppercase font-display">
											submit
										</button>
									</form>
								</div>
							</div>
						</section>
					</div>
				</div>
			</main>

			{/* <section className="overflow-hidden mx-auto pt-28 pb-[6.25rem] bg-[#f7ece1]">
				<div className="flex flex-col max-w-[1320px] mt-0 px-[1em] justify-center items-center">
					<div className="block px-[17em] flex-initial text-center">
						<h2>our clients</h2>
						<div className="w-auto min-h-[auto] mx-0 text-[#4a4b5c] text-[1.125rem] leading-[165%] tracking-[0.002rem]">
							Our featured clients below have partnered with Ladder Hills to
							offer you more information about working for them.
						</div>
					</div>
				</div>
  </section> */}
			<Footer />
		</>
	);
};

export default contact;
