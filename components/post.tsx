import Image from "next/image";
import "@notion-render/client/sass/theme.scss";
import "@notion-render/client/sass/_blocks.scss";
import "@notion-render/client/sass/mixins/_colors.scss";
import "@notion-render/client/sass/blocks/paragraph.scss";
import "@notion-render/client/sass/variables/_colors.scss";

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
    <article className="mx-auto text-justify grid justify-items-center justify-center mb-10 items-center">
      <h1 className="font-bold flex justify-center text-center max-w-[530px] mb-4 text-3xl md:text-5xl">
        {title}
      </h1>
      <Image alt="banner" className="w-[800px]! mt-10" height={500} src={bannerImage} width={800} />
      <div
        dangerouslySetInnerHTML={{__html: content}}
        className="text-xl mt-4 w-full max-w-[300px] md:max-w-[600px] lg:max-w-3xl leading-10 prose prose-p:text-white prose-headings:text-white"
      />
    </article>
  );
}
