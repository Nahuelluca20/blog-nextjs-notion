import Image from "next/image";
import Link from "next/link";

import VercelImage from "@/assets/logo-vercel.svg";
import NotionImage from "@/assets/notion-logo.png";
import TailwindImage from "@/assets/tailwind-svg.svg";

export default function Home() {
  return (
    <main>
      <h2 className="font-bold max-w-[530px] mb-4 text-3xl md:text-5xl">
        Blog with NextJS + Notion
      </h2>
      <div className="mx-auto max-w-[530px]">
        <p className="text-[#647084] text-2xl font-light">
          This is a blog made with NextJS 13 with app router, TailwindsCSS and Notion
        </p>
        <div className="flex gap-8 items-center justify-center my-20">
          <Image alt="vercel" height={60} src={VercelImage} width={60} />
          <span className="text-2xl font-bold">+</span>
          <Image alt="vercel" height={60} src={NotionImage} width={60} />
          <span className="text-2xl font-bold">+</span>
          <Image alt="vercel" height={60} src={TailwindImage} width={60} />
        </div>
      </div>
      <Link
        className="mx-auto flex max-w-full grid-cols-2 w-64 items-center justify-center bg-[#276ef1] py-4 text-center font-semibold text-white [box-shadow:rgb(171,_196,_245)_-8px_8px] transition hover:[box-shadow:rgb(171,_196,_245)_0px_0px] mb-4 px-8"
        href="/blog"
      >
        <div className="mr-6 font-bold">See blog</div>
        <div className="h-4 w-4 flex-none">
          <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
            <title>Arrow Right</title>
            <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
          </svg>
        </div>
      </Link>
    </main>
  );
}
