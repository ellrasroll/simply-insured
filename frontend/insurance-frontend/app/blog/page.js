"use client"; // Ensure the component is marked as a client component

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchBlogs } from '../../lib/api'; // Import the fetchBlogs function
import Cta from "@/components/sections/home1/Cta";

export default function BlogListing() {
    const [blogs, setBlogs] = useState([]); // State to hold blog data
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const fetchedBlogs = await fetchBlogs(); // Fetch the blogs from Strapi
                setBlogs(fetchedBlogs); // Update the state with fetched blogs
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setError("Failed to load blogs."); // Set error message
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };
        getBlogs(); // Call the async function
    }, []); // Empty dependency array to run only once when the component mounts

    // Return loading or error message if necessary
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
<Layout 
    headerStyle={1} 
    footerStyle={1} 
    breadcrumbTitle="Guides and Articles" 
    backgroundImage="/assets/images/blog/blog-listing-banner-1.jpg" // Update this with your image path
    description="Discover in-depth guides and expert articles designed to help you make informed decisions about your insurance needs."
    ctaText="Get a no hassle Quote"
    ctaLink="/guides"
    icon="/assets/images/reviews/feefo.png" // Replace with the actual path of the icon
    iconDescription="Rated 'EXCELLENT' 5 out of 5 Stars by our Customers">    
               {/* Blog Page Start */}
                <section className="blog-page">
                    <div className="container">
                        <div className="row">
                            {blogs.map((blog) => (
                                <div key={blog.id} className="col-xl-4 col-lg-4">
                                    <div className="blog-one__single">
                                        <div className="blog-one__img-box">
                                            <div className="blog-one__img">
                                            <img 
                                                src={blog.Image?.url ? `http://localhost:1337${blog.Image.url}` : "assets/images/blog/default-image.jpg"} 
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
                                                <div className="blog-one__client-content">
                                                    <h3>{blog.Author || "Unknown Author"}</h3>
                                                    <p>{new Date(blog.PublishedDate).toLocaleDateString() || "Invalid Date"}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Blog Page End */}

                {/* CTA One Start  */}
                <Cta></Cta>
            </Layout>
        </>
    );
}
