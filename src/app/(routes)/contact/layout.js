import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "LadderHills - Contact",
	description: "LadderHills Contact Page",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link
				rel="icon"
        href="Logo.png"
				type="image/png"
				sizes="any"
			/>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
