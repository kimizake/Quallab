import { ChangeEventHandler } from "react";

export const Select = (props: {
	label: string;
	name: string;
	options: string[];
	onChange?: ChangeEventHandler<HTMLSelectElement>;
	placeholder?: string;
	required?: boolean;
}) => {
	return (
		<div>
			<select
				className="block py-2.5 px-0 w-full text-sm text-off-white bg-transparent border-0 border-b-2 border-off-white appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				{...props}
				defaultValue=""
			>
				<option value="" disabled>
					{props.label}
				</option>
				{props.options.map((label) => (
					<option key={label}>{label}</option>
				))}
				{props.onChange ? <option>Other</option> : <></>}
			</select>
			<label className="sr-only">{props.label}</label>
		</div>
	);
};
