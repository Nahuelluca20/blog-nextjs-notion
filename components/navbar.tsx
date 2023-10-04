"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

function LinkComponent({text, href, pathname}: {text: string; href: string; pathname: string}) {
  return (
    <Link className={`link ${pathname === href ? "text-blue-400" : ""}`} href={href}>
      {text}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="py-10">
      <ul className="flex gap-8 justify-center font-normal text-xl">
        <LinkComponent href="/" pathname={pathname} text="Home" />
        <LinkComponent href="/blog" pathname={pathname} text="Blog" />
        <LinkComponent href="/contact" pathname={pathname} text="Contact" />
      </ul>
    </nav>
  );
}
