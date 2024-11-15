import { fetchBlogBySlug } from "../../../lib/api";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Cta from "@/components/sections/home1/Cta";
import BlogNewsSidebar from "@/components/sections/home1/BlogSidebar";
import BrandTravel from "@/components/sections/home1/BrandTravel";

// This is a server-side component by default, so no "use client"
export async function generateMetadata({ params }) {
    const blogData = await fetchBlogBySlug(params.slug);

    if (!blogData || blogData.data.length === 0) {
        return {
            title: 'No blog found',
            description: 'The blog you are looking for does not exist.',
        };
    }

    const blog = blogData.data[0];

    return {
        title: blog.Title,
        description: blog.Summary || blog.Content1?.[0]?.children?.[0]?.text || "Insurance information and advice.",
        openGraph: {
            title: blog.Title,
            description: blog.Summary || blog.Content1?.[0]?.children?.[0]?.text || "Insurance information and advice.",
            images: [
                blog.Image?.url ? `http://localhost:1337${blog.Image.url}` : "/default-image.jpg"
            ],
            url: `http://localhost:1337/blog/${blog.slug}`,
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.Title,
            description: blog.Summary || blog.Content1?.[0]?.children?.[0]?.text || "Insurance information and advice.",
            images: [
                blog.Image?.url ? `http://localhost:1337${blog.Image.url}` : "/default-image.jpg"
            ],
        }
    };
}

const BlogDetailsPage = async ({ params }) => {
    // Fetch blog data using the slug from params
    const blogData = await fetchBlogBySlug(params.slug);

    if (!blogData || blogData.data.length === 0) {
        return <div>No blog found</div>;
    }

    const blog = blogData.data[0]; // Access the first blog post

    return (
        <Layout
            headerStyle={1}
            footerStyle={1}
            breadcrumbTitle={blog.Title}
            backgroundImage={
                blog.BannerImage && blog.BannerImage[0]?.url
                    ? `http://localhost:1337${blog.BannerImage[0].url}`
                    : "/assets/images/blog/blog-listing-banner-1.jpg"
            }
        >
            <BrandTravel />

            {/* Blog Details Start */}
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        {/* Main Blog Content */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                <h3 className="blog-details__title-1">{blog.Title}</h3>

                                <div className="blog-details__img-1">
                                    <img
                                        src={blog.Image?.url ? `http://localhost:1337${blog.Image.url}` : "/assets/images/blog/default-image.jpg"}
                                        alt={blog.Title}
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </div>

                                <ul className="list-unstyled blog-details__meta">
                                    <li>
                                        <Link href="#">
                                            <div className="author-info">
                                                <i className="fas fa-user-circle"></i> {blog.Author || "Admin"}
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fas fa-clock"></i> {new Date(blog.PublishedDate).toLocaleDateString()}
                                        </Link>
                                    </li>
                                </ul>

                                {/* Render Content1 */}
                                {Array.isArray(blog.Content1) && (
                                    <div className="blog-details__content">
                                        {blog.Content1.map((block, index) => {
                                            if (block.type === "paragraph") {
                                                return (
                                                    <p key={index} className="blog-details__text-1">
                                                        {block.children.map((child) => child.text)}
                                                    </p>
                                                );
                                            } else if (block.type === "heading") {
                                                const HeadingTag = `h${block.level || 3}`;
                                                return (
                                                    <HeadingTag key={index} className={`blog-details__title-${block.level || 3}`}>
                                                        {block.children.map((child) => child.text)}
                                                    </HeadingTag>
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>
                                )}

                                {/* Render Summary Section */}
                                {blog.Summary && (
                                    <div className="summary-section">
                                        <div className="summary-header" style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src="/assets/images/icon/summary-icon.png"
                                                alt="Summary Icon"
                                                style={{ width: "40px", height: "40px", marginRight: "8px" }}
                                            />
                                            <h2 className="summary-title">{blog.Summary.Title || "Summary"}</h2>
                                        </div>
                                        <p className="summary-description">{blog.Summary.Description}</p>

                                        {/* Display bullet points if available */}
                                        {Array.isArray(blog.Summary.BulletPoint) && blog.Summary.BulletPoint.length > 0 ? (
                                            <ul className="summary-bullet-points">
                                                {blog.Summary.BulletPoint.map((point, index) => (
                                                    <li key={index}>{point.Description || "No description provided"}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No bullet points available.</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar on the right */}
                        <BlogNewsSidebar />
                    </div>
                </div>
            </section>
            <Cta />
            {/* Blog Details End */}
        </Layout>
    );
};

export default BlogDetailsPage;
