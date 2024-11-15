const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export async function fetchBlogs() {
    try {
        console.log(`Fetching blogs from: ${API_URL}/api/blogs?populate=*`);
        const response = await fetch(`${API_URL}/api/blogs?populate=*`);
        if (!response.ok) {
            throw new Error(`Failed to fetch blogs: ${response.statusText}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }
}


export async function fetchBlogBySlug(slug) {
    const response = await fetch(`${API_URL}/api/blogs?filters[Slug][$eq]=${slug}&populate=*`);
    if (!response.ok) {
        throw new Error('Failed to fetch blog post');
    }
    return response.json();
}

