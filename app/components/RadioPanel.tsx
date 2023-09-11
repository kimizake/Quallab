"use client";
import { FormEventHandler } from "react";

export const RadioPanel = (props: {
	heading: string;
	radioName: string;
	buttons: { label: string; onInput?: FormEventHandler<HTMLInputElement> }[];
	required?: boolean;
}) => {
	return (
		<div>
			<h2>{props.heading}</h2>
			<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
				{props.buttons.map((button, idx) => (
					<li
						key={idx}
						className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
					>
						<label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
							<input
								type="radio"
								value={button.label}
								name={props.radioName}
								className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
								required={props.required}
								onInput={button.onInput}
							/>
							{button.label}
						</label>
					</li>
				))}
			</ul>
		</div>
	);
};
