import Image from "next/image";
import { Button } from "./components/Button";
import logo from "../assets/Quallab Grey Logo.png";
import { righteous } from "./styles/fonts";

export default function Home() {
	const BUTTONS = [
		{
			label: "Find Collaborators",
			href: "/find-collaborators",
			text: "Connect with researchers to further your project",
		},
		{
			label: "Find Research Projects",
			href: "/find-projects",
			text: "Boost your portfolio",
		},
	];
	return (
		<main className="flex flex-col py-5 px-5 gap-10">
			<div className="inline-flex justify-center">
				<span className={`${righteous.className} text-7xl md:text-9xl`}>
					Quallab
				</span>
			</div>
			<div className="text-center">
				Connecting students and researchers to foster meaningful collaboration
			</div>
			<div className="grid md:grid-cols-2 md:px-10 gap-6 justify-items-center justify-center">
				{BUTTONS.map((button, idx) => (
					<div
						className="flex flex-col w-full text-center space-y-2 items-center"
						key={idx}
					>
						<Button label={button.label} href={button.href} />
						<div>{button.text}</div>
					</div>
				))}
			</div>
		</main>
	);
}
