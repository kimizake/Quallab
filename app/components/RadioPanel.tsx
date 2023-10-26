"use client";
import { FormEventHandler } from "react";

export const RadioPanel = (props: {
	heading: string;
	name: string;
	buttons: { label: string; onInput?: FormEventHandler<HTMLInputElement> }[];
	required?: boolean;
}) => {
	return (
		<div className="">
			<h2 className="mb-3">{props.heading}</h2>
			<ul className="items-top w-full text-sm font-medium bg-dark-blue border border-off-white rounded-md sm:flex">
				{props.buttons.map((button, idx) => (
					<li
						key={idx}
						className="w-full inline-flex items-center py-2 px-1 align-middle"
					>
						<input
							id={`${props.name}_radio_${idx}`}
							type="radio"
							value={button.label}
							name={props.name}
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
							required={props.required}
							onInput={button.onInput}
						/>
						<label
							className="w-full ml-3 text-sm md:text-xs font-medium"
							htmlFor={`${props.name}_radio_${idx}`}
						>
							{button.label}
						</label>
					</li>
				))}
			</ul>
		</div>
	);
};
