import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Quallab",
	description:
		"Quallab starter website. Currently contains a dummy landing page, which directs to a dummy form",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} flex flex-col h-screen w-full bg-navy text-off-white`}
			>
				<Navbar />
				<div className="flex justify-center flex-row flex-auto mx-2 my-5">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
