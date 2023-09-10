import Link from "next/link";

const Button = (props: { label: string; href: string }) => {
  return (
    <Link
      href={props.href}
      className="bg-off-white text-navy text-center px-5 py-2 rounded-md hover:bg-dark-blue hover:text-off-white w-4/5"
    >
      {props.label}
    </Link>
  );
};

export default function Home() {
  const BUTTONS = [
    {
      label: "Find Collaborators",
      href: "/find-collaborators",
      text: "Connect with researchers to further your project",
    },
    {
      label: "Find Research Projects",
      href: "/find-projects",
      text: "Boost your portfolio",
    },
  ];
  return (
    <main className="flex flex-col py-5 px-5 gap-10">
      <div></div>
      <div className="text-center">
        Connecting students and researchers to foster meaningful collaboration
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row justify-center space-x-0 md:space-x-5 space-y-5 md:space-y-0">
        {BUTTONS.map((button) => (
          <div className="flex flex-col w-full md:w-1/2 items-center text-center space-y-2">
            <Button label={button.label} href={button.href} />
            <text>{button.text}</text>
          </div>
        ))}
      </div>
    </main>
  );
}
