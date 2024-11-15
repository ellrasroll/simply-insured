import Link from 'next/link';

const BlogNewsSidebar = ({ recentBlogs }) => {
    return (
        <div className="col-xl-4 col-lg-5">
            <div className="sidebar">
                {/* Search Section */}
                <div className="sidebar__single sidebar__search">
                    <h3 className="sidebar__title">Search</h3>
                    <form action="#" className="sidebar__search-form">
                        <input type="search" placeholder="Keywords here...." />
                        <button type="submit"><i className="icon-search"></i></button>
                    </form>
                </div>

                {/* Recent Posts Section */}
                <div className="sidebar__single sidebar__post">
                    <h3 className="sidebar__title">Recent Post</h3>
                    <ul className="sidebar__post-list list-unstyled">
                        {recentBlogs && recentBlogs.length > 0 ? (
                            recentBlogs.map((blog) => (
                                <li key={blog.id}>
                                    <div className="sidebar__post-image">
                                        <img 
                                            src={blog.attributes.Image?.url ? `http://localhost:1337${blog.attributes.Image.url}` : "assets/images/blog/default-image.jpg"} 
                                            alt={blog.attributes.Title} 
                                        />
                                    </div>
                                    <div className="sidebar__post-content">
                                        <h3>
                                            <Link href={`/blog/${blog.attributes.Slug}`}>
                                                {blog.attributes.Title}
                                            </Link>
                                            <span className="sidebar__post-content-meta">
                                                <i className="icon-clock"></i> {new Date(blog.attributes.PublishedDate).toLocaleDateString()}
                                            </span>
                                        </h3>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <>
                                <li>
                                    <div className="sidebar__post-image">
                                        <img src="assets/images/blog/lp-1-1.jpg" alt="" />
                                    </div>
                                    <div className="sidebar__post-content">
                                        <h3>
                                            <Link href="blog-details">Keep Your Business Safe Ensure High</Link>
                                            <span className="sidebar__post-content-meta"><i className="icon-clock"></i> April 21, 2023</span>
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar__post-image">
                                        <img src="assets/images/blog/lp-1-2.jpg" alt="" />
                                    </div>
                                    <div className="sidebar__post-content">
                                        <h3>
                                            <Link href="blog-details">We’ve Been a Strategy Thought Leader Nearly</Link>
                                            <span className="sidebar__post-content-meta"><i className="icon-clock"></i> April 21, 2023</span>
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar__post-image">
                                        <img src="assets/images/blog/lp-1-3.jpg" alt="" />
                                    </div>
                                    <div className="sidebar__post-content">
                                        <h3>
                                            <Link href="blog-details">This Week’s Top Stories About It</Link>
                                            <span className="sidebar__post-content-meta"><i className="icon-clock"></i> April 21, 2023</span>
                                        </h3>
                                    </div>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Categories Section */}
                <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Categories</h3>
                    <ul className="insurance-details__catagories-list list-unstyled">
                        <li>
                            <Link href="health-insurance">Health Insurance<span className="icon-next"></span></Link>
                        </li>
                        <li>
                            <Link href="home-insurance">Home Insurance<span className="icon-next"></span></Link>
                        </li>
                        <li>
                            <Link href="life-insurance">Life Insurance <span className="icon-next"></span></Link>
                        </li>
                        <li>
                            <Link href="mortgage">Mortgage<span className="icon-next"></span></Link>
                        </li>
                        <li>
                            <Link href="critical-illness">Critical Illness<span className="icon-next"></span></Link>
                        </li>
                        <li>
                            <Link href="business-insurance">Business Insurance<span className="icon-next"></span></Link>
                        </li>
                    </ul>
                </div>

                {/* Need Help Section */}
                <div className="insurance-details__need-help">
                    <div className="insurance-details__need-help-bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/insurance-details-need-help-bg.jpg)' }} >
                    </div>
                    <h3 className="insurance-details__need-help-title">Need Any Types
                        <br/> of Service
                        <br/> from us
                    </h3>
                    <div className="insurance-details__need-help-btn-box">
                        <Link href="contact" className="insurance-details__need-help-btn thm-btn">FIND SOLUTION</Link>
                    </div>
                </div>

                {/* Tags Section */}
                <div className="sidebar__single sidebar__tags">
                    <h3 className="sidebar__title">Tags</h3>
                    <div className="sidebar__tags-list">
                        <Link href="#">IT Technology</Link>
                        <Link href="#">Software</Link>
                        <Link href="#">Design</Link>
                        <Link href="#">Service</Link>
                        <Link href="#">Development</Link>
                        <Link href="#">Digital</Link>
                        <Link href="#">Cyber</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogNewsSidebar;
