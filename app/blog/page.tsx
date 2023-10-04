import Link from "next/link";

import BlogPreviewCard from "@/components/blog-preview-card";

export default function page() {
  const blogData = [
    {
      id: "14213213",
      title: "How to use Notion as a CMS for your NextJS blog",
      content: "Learn how to use Notion as a CMS for your NextJS blog",
    },
    {
      id: "346546",
      title: "How to use Notion as a CMS for your NextJS blog",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet dolor sit amet consectetur adipiscing",
    },
  ];

  return (
    <section>
      <div className="mx-auto grid justify-center w-full">
        <div className="mx-auto">
          <h2 className="max-w-[530px] font-bold text-3xl md:text-5xl mb-8 md:mb-12 lg:mb-4 pb-16">
            Posts on the blog
          </h2>
        </div>
        <div className="grid gap-5 px-3 md:px-0">
          {blogData.map((blog) => (
            <Link key={blog.id} className="cursor-pointer" href={`/blog/${blog.id}`}>
              <BlogPreviewCard content={blog.content} title={blog.title} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
