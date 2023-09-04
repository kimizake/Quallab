import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/submit">Form</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Navbar;
