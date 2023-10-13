import { useEffect, useState } from 'react';
import { fetchNews } from '../../utils/fetchs';
import Loading from '../../components/loading/Loading';

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  const getNews = async () => {
    try {
      const newsData = await fetchNews('10');
      setNews(newsData);
      setLoading(false);
    } catch (error) {
      setShowError(true);
    }
  };

  useEffect(() => {
    getNews();
  }, []);
  console.log(news);

  return (
    <section>
      {loading && <Loading />}

    </section>
  );
}
