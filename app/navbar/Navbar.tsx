import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-slate-800 flex flew-wrap flex-row items-center justify-between">
      <Link href="/">
        <span className="text-2xl self-center whitespace-nowrap">Quollab</span>
      </Link>
      <div className="md:flex-row md:space-x-2">
        <Link href="/submit" className="hover:text-white">
          Submit
        </Link>
        <Link href="/about" className="hover:text-white">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
