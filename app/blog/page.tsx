import Link from "next/link";

import BlogPreviewCard from "@/components/blog-preview-card";
import {getPages} from "@/utils/notion";

export default async function page() {
  const pagesBlog = await getPages();

  return (
    <section>
      <div className="mx-auto grid justify-center w-full">
        <div className="mx-auto">
          <h2 className="max-w-[530px] font-bold text-3xl md:text-5xl mb-8 md:mb-12 lg:mb-4 pb-16">
            Posts on the blog
          </h2>
        </div>
        <div className="grid gap-5 px-3 md:px-0">
          {pagesBlog &&
            pagesBlog.results?.map((blog: any) => (
              <Link
                key={blog.properties.Slug.rich_text[0].plain_text}
                className="cursor-pointer"
                href={`/blog/${blog.properties.Slug.rich_text[0].plain_text}`}
              >
                <BlogPreviewCard
                  content={blog.properties.Description.rich_text[0].plain_text ?? ""}
                  title={blog.properties.Title.title[0]?.plain_text ?? ""}
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
