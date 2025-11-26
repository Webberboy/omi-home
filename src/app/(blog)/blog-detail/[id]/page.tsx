import BlogCanvas from "@/src/components/blog/BlogCanvas";
import BlogDetail from "@/src/components/blog/BlogDetail";
import Layout from "@/src/components/layout/Layout";
import PageTitle from "@/src/components/section/PageTitle";
import { blogItems, BlogItem } from "@/src/data/blog";
import { notFound } from "next/navigation";

interface PageBlogProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function PageBlogDetail({ params }: PageBlogProps) {
    const { id } = await params;
    const blogId = Number(id);
    const blog: BlogItem | undefined = blogItems.find((item) => item.id === blogId);

    if (!blog) {
        notFound();
    }

    return (
        <Layout>
            <PageTitle name="BLOG" />
            <BlogDetail
                name={blog.name}
                meta_author={blog.meta_author}
                meta_date={blog.meta_date}
                meta_tag={blog.meta_tag}
                image={blog.image}
                tag={blog.tag}
            />
            <BlogCanvas />
        </Layout>
    );
}

export async function generateStaticParams() {
    return blogItems.map((item) => ({
        id: item.id.toString(),
    }));
}
