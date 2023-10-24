import { Button } from "../components/Button";

const ThankYou = () => {
	return (
		<div className="flex flex-col gap-5 py-5 px-10 justify-center items-center">
			<p>Thanks for the form submission.</p>
			<Button label={"Home"} href="/" />
		</div>
	);
};

export default ThankYou;
