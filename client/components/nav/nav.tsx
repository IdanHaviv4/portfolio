import Link from "next/link";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full py-4 z-40 bg-primary">
      <div className="w-full max-w-max-width mx-auto flex justify-between items-center">
        <div></div>

        <ul className="list-none flex items-center gap-9">
          {["home", "projects", "education", "certificates"].map((section) => (
            <li key={section}>
              <Link href={`/#${section}`} className="capitalize">
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
