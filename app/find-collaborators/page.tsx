"use client";
import { ChangeEvent, FormEvent, Fragment, useReducer, useState } from "react";
import { Input } from "../components/Input";
import { RadioPanel } from "../components/RadioPanel";
import { Select } from "../components/Select";
import { TextArea } from "../components/TextArea";
import { CollaboratorForm } from "../types/formDataType";
import { DateInput } from "../components/DateField";
import { useRouter } from "next/navigation";

const handleSubmit = async (ev: FormEvent, formData: CollaboratorForm) => {
	ev.preventDefault();
	await fetch("/api/collaboratorUpload", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formData),
	});
};

const formReducer = (
	state: CollaboratorForm,
	event: ChangeEvent<HTMLFormElement>
): CollaboratorForm => {
	return {
		...state,
		[event.target.name]: event.target.value,
	};
};

const FormBody = (props: { enabled: boolean }) => {
	const [otherSpecialty, toggleOtherSpecialty] = useState(false);
	const [accessRequirements, setAccessRequirements] = useState(false);
	const [experienceDetails, setExperienceDetails] = useState(false);

	const JobDropdownOptions = ["Medical student", "Doctor"];
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

	return (
		<Fragment>
			<div className="grid md:grid-cols-2 gap-5 md:gap-10">
				<Input
					label="First name"
					type="text"
					name="firstName"
					pattern="[A-Za-z]+"
					placeholder=""
					required={true}
				/>
				<Input
					label="Last name"
					type="text"
					name="lastName"
					pattern="[A-Za-z]+((\s|-)?[A-Za-z]+)?"
					placeholder=""
					required={true}
				/>
			</div>
			<Input
				label="Institution email"
				type="email"
				name="email"
				placeholder=""
				pattern="[A-Za-z]+\.[A-Za-z]+\.[0-9]+@ucl.ac.uk"
				required={true}
			/>
			<Select
				label="Job title"
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
					label="Specialty of interest"
					name="interest"
					type="text"
					placeholder=""
					required={otherSpecialty}
				/>
			</div>
			<Input
				label="Title of project"
				name="projectTitle"
				type="text"
				placeholder=""
				required={true}
			/>
			<Input
				label="Brief description of project"
				name="projectDescription"
				type="text"
				placeholder=""
				required={true}
			/>
			<Input
				label="Research style (e.g. literature review, audit)"
				name="researchStyle"
				type="text"
				placeholder=""
				required={true}
			/>
			<TextArea
				label="Description of work"
				name="descriptionOfWork"
				placeholder=""
				required={true}
			/>
			<Input
				label="Time requirement (estimated hours)"
				name="timeRequirement"
				type="number"
				min={0}
				placeholder=""
				required={true}
			/>
			<DateInput
				label="Research start date requirement"
				name="startDate"
				type="date"
				placeholder=""
				required={true}
				min={new Date().toISOString().split("T")[0]}
			/>
			<Input
				label="How many collaborators are you looking for?"
				name="numberOfCollaborators"
				type="number"
				min={0}
				placeholder=""
				required={true}
			/>
			<h1 className="p-0">Requirements for researchers</h1>
			<RadioPanel
				heading="Availability"
				name="availability"
				buttons={[{ label: "In person" }, { label: "Online" }]}
				required
			/>
			<RadioPanel
				heading="Access requirements"
				name="accessRequirements"
				buttons={[
					{
						label: "Yes",
						onInput: () => {
							setAccessRequirements(true);
						},
					},
					{
						label: "No",
						onInput: () => {
							setAccessRequirements(false);
						},
					},
				]}
				required
			/>
			<div className={accessRequirements ? "" : "hidden"}>
				<TextArea
					label="Access requirements (detail)"
					name="accessRequirements"
					placeholder=""
					required={accessRequirements}
				/>
			</div>
			<RadioPanel
				heading="Experience level"
				name="experienceLevel"
				buttons={[
					{
						label: "Beginner (no research experience)",
						onInput: () => {
							setExperienceDetails(false);
						},
					},
					{
						label: "Intermediate (some research experience",
						onInput: () => {
							setExperienceDetails(true);
						},
					},
					{
						label: "Advanced (looking for specific skills)",
						onInput: () => {
							setExperienceDetails(true);
						},
					},
				]}
				required
			/>
			<div className={experienceDetails ? "" : "hidden"}>
				<Input
					label="Skill required (detail)"
					name="experienceLevel"
					type="text"
					placeholder=""
					required={experienceDetails}
				/>
			</div>
			<div className="hidden group-invalid:block text-xs text-red-500 text-center">
				<p>Please fill out all form inputs.</p>
			</div>
			<button
				type="submit"
				className="bg-off-white text-navy text-center px-5 py-2 rounded-md hover:bg-dark-blue hover:text-off-white w-full disabled:bg-slate-800 bg:text-slate-600 group-invalid:pointer-events-none group-invalid:opacity-30"
				disabled={!props.enabled}
			>
				Submit
			</button>
		</Fragment>
	);
};

const FindCollaborators = () => {
	const [formData, setFormData] = useReducer(formReducer, {
		accessRequirements: "",
		availability: "Online",
		descriptionOfWork: "",
		email: "",
		experienceLevel: "",
		firstName: "",
		interest: "",
		jobTitle: "",
		lastName: "",
		numberOfCollaborators: 0,
		projectDescription: "",
		projectTitle: "",
		researchStyle: "",
		startDate: "",
		timeRequirement: 0,
	});
	const [enabled, setEnabled] = useState(true);

	const { push } = useRouter();

	return (
		<div className="flex flex-col gap-5 w-4/5">
			<h1 className="text-center">
				<b>Find Collaborators</b>
			</h1>
			<form
				className="grid gap-5 group"
				onSubmit={async (e) => {
					setEnabled(false);
					handleSubmit(e, { ...formData });
					push("/thankYou");
				}}
				onChange={setFormData}
			>
				<FormBody enabled={enabled} />
			</form>
		</div>
	);
};

export default FindCollaborators;
