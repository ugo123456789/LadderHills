"use client";
import Button from "@/components/button";
import Navbar from "@/components/navbar";
import Logo from "../../public/Logo.png";
import { motion } from "framer-motion";

export default function Home() {
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

	const text =
		"We connect talented people with Health Organisations. Join our network today";
	return (
		<main
			className="w-full min-h-screen px-4 overflow-hidden brightness-[.90]"
			style={{
				backgroundImage:
					'url("https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUyfHx3ZWJzaXRlJTIwYmFja2dyb3VuZCUyMGJ1c2luZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60")',
				backgroundSize: "cover",
				backgroundPosition: "50% 50%",
				backgroundRepeat: "no-repeat",
			}}>
			<div className="!ml-4 md:!ml-11">
				<Navbar Isrc={Logo} />
				<div className="maindiv mt-36 lg:mt-0  flex w-full h-[40vh] md:h-[50vh] flex-col justify-end items-start self-auto flex-initial md:!mb-36">
					<motion.div
						variants={quote}
						initial="initial"
						animate="animate"
						className="textdiv flex w-full max-w-[85%] md:max-w-[70%] lg:max-w-[60%] flex-col items-start flex-initial md:max-lg:mb-40">
						<motion.h1
							variants={singleWord}
							className="capitalize text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-5 md:mb-4 lg:mb-5 md:max-lg:mb-10">
							We&rsquo;ll be launching soon!
						</motion.h1>
						<motion.p className="capitalize font-display text-md md:text-xl lg:text-xl font-light text-white lg:mt-8 mb-6 md:mb-8 pt-20 sm:pt-0">
							{text.split(" ").map((word, index) => (
								<motion.span
									key={word + " - " + index}
									className="inline-block"
									variants={singleWord}>
									{word}&nbsp;
								</motion.span>
							))}
						</motion.p>

						<Button name={"CONTACT US"} link={"/contact"} />
					</motion.div>
				</div>
			</div>
		</main>
	);
}
