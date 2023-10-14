import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Dispatch, ReduxState } from '../../types';

import { fetchRecentsNews } from '../../redux/actions/recentsNewsAction';

import Loading from '../../components/loading/Loading';
import NewsCard from '../../components/newsCard/NewsCard';

import styles from './home.module.css';

export default function Home() {
  const { news, loading, error } = useSelector(
    (state:ReduxState) => state.newsReducer,
  );
  const { moreNews } = useSelector((state:ReduxState) => state.moreNewsReducer);
  const dispatch:Dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecentsNews());
  }, []);

  return (
    <section className={ styles.container }>
      {loading && <Loading />}

      {news.map((newInfo) => (
        <NewsCard key={ newInfo.id } newInfo={ newInfo } />
      )).filter((e, index) => index <= moreNews)}

    </section>
  );
}
