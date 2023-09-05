"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

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

const NavBarLink = (props: { text: string; link: string }) => {
	return (
		<Link href={props.link} className="text-slate-500 hover:text-white px-2">
			{props.text}
		</Link>
	);
};

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="sticky top-0 w-full bg-slate-800 flex flew-wrap flex-row items-center justify-between py-2 px-1 ">
			<Link href="/">
				<span className="text-2xl self-center whitespace-nowrap">Quollab</span>
			</Link>
			<div className="hidden sm:flex items-center sm:flex-row sm:space-x-2">
				<NavBarLink text="Submit" link="/submit" />
				<NavBarLink text="About" link="/about" />
			</div>
			<div className="sm:hidden">
				<Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</nav>
	);
};

export default Navbar;
