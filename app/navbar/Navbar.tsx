"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import logo from "../../assets/Quallab Grey Logo.png";

const BUTTONS = [{ text: "About Us", href: "/about" }];

const Hamburger = (props: {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	const genericLine =
		"h-1 w-6 my-1 rounded-full bg-slate-500 transition ease transform duration-300";

	return (
		<button
			className="flex flex-col h-12 w-12 justify-center items-center group"
			onClick={() => props.setIsOpen(!props.isOpen)}
			role="menu"
		>
			<span
				className={`${genericLine} ${
					props.isOpen
						? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
						: "opacity-50 group-hover:opacity-100"
				}`}
			/>
			<span
				className={`${genericLine} ${
					props.isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
				}`}
			/>
			<span
				className={`${genericLine} ${
					props.isOpen
						? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
						: "opacity-50 group-hover:opacity-100"
				}`}
			/>
		</button>
	);
};

const NavBarLink = (props: { text: string; href: string; other?: any[] }) => {
	return (
		<Link className="hover:text-white" href={props.href} {...props.other}>
			{props.text}
		</Link>
	);
};

const Navbar = () => {
	return (
		<nav className="sticky top-0 w-full z-50 bg-dark-blue flex flew-wrap flex-row items-center justify-between px-5">
			<Link className="h-16 items-center hover:text-white" href="/">
				<Image
					src={logo}
					alt="Quallab"
					className="object-contain object-left w-full h-full"
				/>
			</Link>
			<div className="items-center flex flex-row sm:space-x-2">
				{BUTTONS.map((obj) => (
					<NavBarLink {...obj} key={obj.text} />
				))}
			</div>
		</nav>
	);
};

export default Navbar;
