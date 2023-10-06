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
    <article>
      <h1 className="mx-auto grid mb-10 items-center pt-20">{title}</h1>
      <h1 className="w-full mb-10 flex flex-col items-center pt-20">{bannerImage}</h1>
      <Image alt="banner" className="w-[800px]!" height={500} src={bannerImage} width={800} />
      <div
        // dangerouslySetInnerHTML={{__html: content}}
        className="text-xl mt-4 max-w-3xl leading-10 prose prose-p:text-white prose-headings:text-white"
      >
        {content}
      </div>
    </article>
  );
}
