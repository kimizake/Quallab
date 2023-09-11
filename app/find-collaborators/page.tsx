"use client";
import { useState } from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";

const FindCollaborators = () => {
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
  return (
    <div className="flex flex-col gap-5 w-4/5">
      <h1 className="text-center">Find Collaborators</h1>
      <form className="py-6">
        <div className="grid md:grid-cols-2 md:gap-10">
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
        <Input
          label="Description of work (preliminary work, writing, screening)"
          type="textarea"
          placeholder=""
          required={true}
        />
        <Input
          label="Time requirement (estimated number of hours of work)"
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
