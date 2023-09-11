"use client";
import { useState } from "react";
import { Input } from "../components/Input";
import { RadioPanel } from "../components/RadioPanel";
import { Select } from "../components/Select";
import { TextArea } from "../components/TextArea";

const FindCollaborators = () => {
	const [otherSpecialty, toggleOtherSpecialty] = useState(false);
	const [accessRequirements, setAccessRequirements] = useState(false);
	const [experienceDetails, setExperienceDetails] = useState(false);

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
	return (
		<div className="flex flex-col gap-5 w-4/5">
			<h1 className="text-center">
				<b>Find Collaborators</b>
			</h1>
			<form className="grid gap-5">
				<div className="grid md:grid-cols-2 gap-5 md:gap-10">
					<Input
						label="First Name"
						type="text"
						placeholder=""
						required={true}
					/>
					<Input label="Last Name" type="text" placeholder="" required={true} />
				</div>
				<Input
					label="Insutition Email"
					type="text"
					placeholder=""
					pattern="[A-za-z]+@[A-Za-z]+.ac.uk"
					required={true}
				/>
				<Select
					label="Job Title"
					options={JobDropdownOptions}
					placeholder=""
					required={true}
				/>
				<Select
					label="Specialty of interest"
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
						type="text"
						placeholder=""
						required={otherSpecialty}
					/>
				</div>
				<Input
					label="Title of Project"
					type="text"
					placeholder=""
					required={true}
				/>
				<Input
					label="Brief description of project"
					type="text"
					placeholder=""
					required={true}
				/>
				<Input
					label="Research style (e.g. literature review, audit)"
					type="text"
					placeholder=""
					required={true}
				/>
				<TextArea label="Description of work" placeholder="" required={true} />
				<Input
					label="Time requirement (estimated hours)"
					type="number"
					min={0}
					placeholder=""
					required={true}
				/>
				<Input
					label="Research start date requirement"
					type="date"
					placeholder=""
					required={true}
				/>
				<Input
					label="How many collaborators are you looking for"
					type="number"
					min={0}
					placeholder=""
					required={true}
				/>
				<h1 className="p-0">Requirements for researchers</h1>
				<RadioPanel
					heading="Availability"
					radioName="availability-radio"
					buttons={[{ label: "In Person" }, { label: "Online" }]}
					required
				/>
				<RadioPanel
					heading="Access Requirements"
					radioName="requirements-radio"
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
						placeholder=""
						required={accessRequirements}
					/>
				</div>
				<RadioPanel
					heading="Experience Level"
					radioName="experience-radio"
					buttons={[
						{
							label: "Beginner (No Research Experience)",
							onInput: () => {
								setExperienceDetails(false);
							},
						},
						{
							label: "Intermediate (Some Research Experience",
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
						type="text"
						placeholder=""
						required={experienceDetails}
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

export default FindCollaborators;
