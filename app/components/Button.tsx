import Link from "next/link";

export const Button = (props: { label: string; href: string }) => {
  return (
    <Link
      href={props.href}
      className="bg-off-white text-navy text-center px-5 py-2 rounded-md hover:bg-dark-blue hover:text-off-white w-4/5"
    >
      {props.label}
    </Link>
  );
};
