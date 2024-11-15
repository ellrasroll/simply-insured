import { fetchNews } from '../../lib/api';

const AllNewsPage = async () => {
  // Fetch all news articles
  const news = await fetchNews();

  return (
    <div>
      <h1>All News</h1>
      <ul>
        {news.map((article) => (
          <li key={article.id}>
            <a href={`/news/${article.slug}`}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllNewsPage;
