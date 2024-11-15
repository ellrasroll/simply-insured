// components/sections/home1/Blog.js
"use client"; // Ensure the component is marked as a client component

import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchBlogs } from "../../../lib/api"; // Adjust the path if needed

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const fetchedBlogs = await fetchBlogs(); // Fetch blogs from the API
                setBlogs(fetchedBlogs.slice(0, 3)); // Limit to 3 blogs for homepage
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setError("Failed to load blogs.");
            } finally {
                setLoading(false);
            }
        };
        getBlogs();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            {/* Blog One Start */}
            <section className="blog-one">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-title__tagline-box">
                            {/* Optional tagline or styling */}
                        </div>
                        <h2 className="section-title__title">Read Our Latest Blog Post</h2>
                    </div>
                    <div className="row">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img 
                                                src={blog.Image?.url ? `http://localhost:1337${blog.Image.url}` : "/assets/images/blog/default-image.jpg"} 
                                                alt={blog.Title} 
                                            />
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <div className="blog-one__tag">
                                            <span>Insurance</span>
                                            <span>Agency</span>
                                        </div>
                                        <h3 className="blog-one__title">
                                            <Link href={`/blog/${blog.Slug}`}>{blog.Title}</Link>
                                        </h3>
                                        <div className="blog-one__client-info">
                                            <div className="blog-one__client-img">
                                                {/* Replace with actual client image if available */}
                                                <img src={blog.AuthorImage?.url || "/assets/images/blog/default-author.jpg"} alt={blog.Author} />
                                            </div>
                                            <div className="blog-one__client-content">
                                                <h3>{blog.Author || "Unknown Author"}</h3>
                                                <p>{new Date(blog.PublishedDate).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Blog One End */}
        </>
    );
}
