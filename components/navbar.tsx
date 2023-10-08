"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

function LinkComponent({text, href, pathname}: {text: string; href: string; pathname: string}) {
  const isActive = pathname === href || (pathname.startsWith(href) && href !== "/");

  return (
    <Link className={`link ${isActive ? "text-blue-400" : ""}`} href={href}>
      {text}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const routes = [
    {text: "Home", href: "/"},
    {text: "Blog", href: "/blog"},
    {text: "Contact", href: "/contact"},
  ];

  return (
    <nav className="py-10 mb-20">
      <ul className="flex gap-12 justify-center font-medium text-xl">
        {routes.map((route) => (
          <li key={route.href} className="list-none">
            <LinkComponent href={route.href} pathname={pathname} text={route.text} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
