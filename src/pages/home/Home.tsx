import { useEffect, useState } from 'react';
import { fetchNews } from '../../utils/fetchs';
import Loading from '../../components/loading/Loading';
import { NewsType } from '../../types';
import NewsCard from '../../components/newsCard/NewsCard';

export default function Home() {
  const [news, setNews] = useState<NewsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  const getNews = async () => {
    try {
      const newsData = await fetchNews('10');
      setNews(newsData.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setShowError(true);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section>
      {loading && <Loading />}

      {news.map((newInfo) => (
        <NewsCard key={ newInfo.id } newInfo={ newInfo } />
      ))}
    </section>
  );
}
