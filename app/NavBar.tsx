"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug className="text-2xl" />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ href, label }) => (
          <li key={label}>
            <Link
              className={classNames({
                "text-zinc-900 font-semibold": href === currentPath,
                "text-zinc-500": href !== currentPath,
                "hover:text-zinc-800 transition-colors ": true,
              })}
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
