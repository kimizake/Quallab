"use client";

import { ChangeEventHandler, useState } from "react";

const Input = (props: {
  label: string;
  type: string;
  placeholder?: string;
  pattern?: string;
  required?: boolean;
}) => {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        {...props}
      />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        {props.label}
      </label>
    </div>
  );
};

const Select = (props: {
  label: string;
  options: string[];
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  placeholder?: string;
  required?: boolean;
}) => {
  return (
    <div className="py-2.5">
      <select
        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
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

export default FindProjects;
