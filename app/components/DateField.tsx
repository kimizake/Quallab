export const DateInput = (props: {
	label: string;
	type: string;
	name: string;
	placeholder?: string;
	required?: boolean;
	min?: string;
}) => {
	return (
		<div className="relative z-0 w-full group flex flex-row-reverse items-center">
			<input
				className="block py-2.5 px-0 w-full text-sm text-off-white bg-transparent border-0 border-b-2 border-off-white appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				{...props}
			/>
			<label className="peer-focus:font-medium text-sm text-off-white peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
				{props.label}
			</label>
		</div>
	);
};
