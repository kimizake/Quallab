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
    <div className="flex flex-col gap-5">
      <h1 className="text-center">Find Research</h1>
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
