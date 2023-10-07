import Image from "next/image";

export default function Post({
  title,
  content,
  bannerImage,
}: {
  title: string;
  content: string;
  bannerImage: string;
}) {
  return (
    <article className="mx-auto grid justify-items-center justify-center mb-10 text-center items-center">
      <h1 className="font-bold flex justify-center text-center max-w-[530px] mb-4 text-3xl md:text-5xl">
        {title}
      </h1>
      <Image alt="banner" className="w-[800px]! mt-10" height={500} src={bannerImage} width={800} />
      <div
        className="text-xl mt-4 max-w-3xl leading-10 prose prose-p:text-white prose-headings:text-white"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
}
