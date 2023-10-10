"use client";
import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { ProjectForm } from "../types/formDataType";

const handleSubmit = async (ev: FormEvent, formData: ProjectForm) => {
	ev.preventDefault();
	const res = await fetch("/api/projectUpload", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formData),
	});
	await res.json();
};

const formReducer = (
	state: ProjectForm,
	event: ChangeEvent<HTMLFormElement>
) => {
	return {
		...state,
		[event.target.name]: event.target.value,
	};
};

const FindProjects = () => {
	const JobDropdownOptions = ["Medical student", "Junior doctor"];
	const SpecialtyDropdownOptions = [
		"Anaesthetics",
		"Oncology",
		"Radiology",
		"Sexual and reproductive health",
		"Emergency medicine",
		"GP",
		"Intensive care medicine",
		"Obstetrics and gynaecology",
		"Occupational medicine",
		"Opthalmology",
		"Paediatrics",
		"Psyciatry",
		"Public health",
		"Surgery",
	];
	const [otherSpecialty, toggleOtherSpecialty] = useState(false);

	const [formData, setFormData] = useReducer(formReducer, {
		// accessRequirements: "",
		// availability: "Online",
		email: "",
		// experienceLevel: "",
		firstName: "",
		interest: "",
		jobTitle: "",
		lastName: "",
	});
	return (
		<div className="flex flex-col gap-5 w-4/5">
			<h1 className="text-center">
				<b>Find Research</b>
			</h1>
			<form
				className="grid gap-5"
				onSubmit={(e) => handleSubmit(e, { ...formData })}
				onChange={setFormData}
			>
				<div className="grid md:grid-cols-2 gap-5 md:gap-10">
					<Input
						label="First Name"
						type="text"
						name="firstName"
						placeholder=""
						required={true}
					/>
					<Input
						label="Last Name"
						type="text"
						name="lastName"
						placeholder=""
						required={true}
					/>
				</div>
				<Input
					label="Insutition Email"
					type="text"
					name="email"
					placeholder=""
					pattern="[A-za-z]+@[A-Za-z]+.ac.uk"
					required={true}
				/>
				<Select
					label="Job Title"
					name="jobTitle"
					options={JobDropdownOptions}
					placeholder=""
					required={true}
				/>
				<Select
					label="Specialty of interest"
					name="interest"
					options={SpecialtyDropdownOptions}
					onChange={(e) => {
						toggleOtherSpecialty(e.target.value === "Other");
					}}
					placeholder=""
					required={true}
				/>
				<div className={otherSpecialty ? "" : "hidden"}>
					<Input
						label="Specialty of Interest"
						name="interest"
						type="text"
						placeholder=""
						required={otherSpecialty}
					/>
				</div>
				<button
					type="submit"
					className="bg-off-white text-navy text-center px-5 py-2 rounded-md hover:bg-dark-blue hover:text-off-white w-full"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default FindProjects;
