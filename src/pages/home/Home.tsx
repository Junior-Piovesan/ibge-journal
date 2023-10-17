import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Dispatch, ReduxState } from '../../types';

import { fetchRecentsNews } from '../../redux/actions/recentsNewsAction';

import Loading from '../../components/loading/Loading';
import NewsCard from '../../components/newsCard/NewsCard';

import styles from './home.module.css';
import Footer from '../../components/footer/Footer';
import { initialGlobalState } from '../../utils/InitialGlobalState';
import PopUpError from '../../components/popUpError/PopUpError';

export default function Home() {
  const { news, loading, error } = useSelector(
    (state:ReduxState) => state.newsReducer,
  );
  const { filter } = useSelector((state:ReduxState) => state.filterReducer);
  const { moreNews } = useSelector((state:ReduxState) => state.moreNewsReducer);
  const dispatch:Dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecentsNews());
    initialGlobalState();
  }, []);

  return (
    <section className={ styles.container }>
      {loading && <Loading />}

      {news.map((newInfo, index) => (
        <NewsCard key={ newInfo.id } index={ index } newInfo={ newInfo } />
      )).filter((e, index) => index <= moreNews && typeof e === 'object')}
      {!loading && <Footer />}

      {error && <PopUpError />}
    </section>
  );
}
