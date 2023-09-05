"use client";

import { Transition } from "@headlessui/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

const BUTTONS = [
	{ text: "Submit", href: "/submit" },
	{ text: "About", href: "/about" },
];

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
		<Link
			className="text-slate-500 hover:text-white p-2"
			href={props.href}
			{...props.other}
		>
			{props.text}
		</Link>
	);
};

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="sticky top-0 w-full bg-slate-800 flex flew-wrap flex-row items-center justify-between px-1 ">
			<Link className="py-2 px-1" href="/">
				<span className="text-2xl self-center whitespace-nowrap text-slate-500 hover:text-white">
					Quollab
				</span>
			</Link>
			<div className="hidden sm:flex items-center sm:flex-row sm:space-x-2">
				{BUTTONS.map((obj) => (
					<NavBarLink {...obj} key={obj.text} />
				))}
			</div>
			<div className="sm:hidden">
				<Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
				<Transition
					enter="transition duration-100 ease-out"
					enterFrom="transform scale-95 opacity-0"
					enterTo="transform scale-100 opacity-100"
					leave="transition duration-75 ease-out"
					leaveFrom="transform scale-100 opacity-100"
					leaveTo="transform scale-95 opacity-0"
					show={isOpen}
				>
					<div className="absolute flex flex-col right-0 mt-1 origin-top-right rounded-md bg-slate-800 px-5">
						{BUTTONS.map((obj) => (
							<NavBarLink {...obj} key={obj.text} />
						))}
					</div>
				</Transition>
			</div>
		</nav>
	);
};

export default Navbar;
