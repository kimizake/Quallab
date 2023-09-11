import { ChangeEventHandler } from "react";

export const Select = (props: {
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
