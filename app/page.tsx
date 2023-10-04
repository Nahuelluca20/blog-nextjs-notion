import Image from "next/image";

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
        <div className="flex gap-8 items-center justify-center mt-20">
          <Image alt="vercel" height={60} src={VercelImage} width={60} />
          <span className="text-2xl font-bold">+</span>
          <Image alt="vercel" height={60} src={NotionImage} width={60} />
          <span className="text-2xl font-bold">+</span>
          <Image alt="vercel" height={60} src={TailwindImage} width={60} />
        </div>
      </div>
    </main>
  );
}
