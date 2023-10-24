export const Input = (props: {
	label: string;
	type: string;
	name: string;
	placeholder?: string;
	pattern?: string;
	required?: boolean;
	min?: number;
}) => {
	return (
		<div className="relative z-0 w-full group peer">
			<input
				className="block py-2.5 px-0 w-full text-sm text-off-white bg-transparent border-0 border-b-2 border-off-white appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer [&:not(:placeholder-shown):not(:focus):invalid]:border-red-500"
				{...props}
			/>
			<label className="peer-focus:font-medium absolute text-sm text-off-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-[&:not(:placeholder-shown):not(:focus):invalid]:text-red-500">
				{props.label}
			</label>
			<span className="group-invalid:after:*"></span>
		</div>
	);
};
