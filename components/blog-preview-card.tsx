import Image from "next/image";

import ExampleImg from "@/assets/example.svg";

export default function BlogPreviewCard({title, content}: {title: string; content: string}) {
  return (
    <div className="mx-auto grid-cols-1 grid max-w-2xl gap-6">
      <div className="flex-row flex items-center justify-center gap-6 border border-solid border-[#ada790] px-6 py-4 transition hover:bg-blue-100 max-[767px]:mx-auto max-[767px]:max-w-[480px] rounded-2xl sm:rounded-full">
        <div className="flex-col flex-none flex h-20 w-20 items-center justify-center bg-blue-400 rounded-full">
          <Image alt="blog" height={32} src={ExampleImg} width={32} />
        </div>
        <div className="flex-col flex items-start gap-2.5">
          <h5 className="font-bold text-base md:text-xl">{title}</h5>
          <p className="text-[#636262] text-start">{content}</p>
        </div>
      </div>
    </div>
  );
}
