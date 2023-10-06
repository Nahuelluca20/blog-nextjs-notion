import {notFound} from "next/navigation";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import {NotionRenderer} from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";

import {getPageBySlug, getPageContent, notionClient} from "@/utils/notion";
import Post from "@/components/post";

export default async function page({params}: {params: {slug: string}}) {
  const post = await getPageBySlug(params.slug);

  if (!post) notFound();

  const content = await getPageContent(post.id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const html = await notionRenderer.render(...content);

  return (
    <div>
      <Post
        bannerImage={(post.properties.BannerImage as any).url}
        content={html}
        title={(post.properties.Title as any).title[0].plain_text}
      />
    </div>
  );
}
