import Head from 'next/head';

const SEO = ({ title, description, image, url, type = "WebPage", author, datePublished }) => {
  // Default values
  const defaultDescription = 'Your trusted source for insurance information and quotes';
  const defaultImage = '/assets/images/resources/logo-1.png'; // Update with your default image path
  const currentUrl = url;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type, // Page type (WebPage, BlogPosting, etc.)
    name: title,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: currentUrl,
    ...(author && { author: { "@type": "Person", name: author } }), // Include author if available
    ...(datePublished && { datePublished }) // Include datePublished if available
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description || defaultDescription} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      
      {/* Twitter Tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default SEO;
