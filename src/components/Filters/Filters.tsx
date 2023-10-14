import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Dispatch } from '../../types';

import { fetchReleaseAction } from '../../redux/actions/releaseNewsAction';
import { fetchRecentsNews } from '../../redux/actions/recentsNewsAction';
import { fetchNoticiasAction } from '../../redux/actions/noticiasNewsAction';

import styles from './filter.module.css';

export default function Filters() {
  const dispatch:Dispatch = useDispatch();

  return (
    <nav className={ styles.nav }>

      <label htmlFor="recentes">
        Mais recentes
        <input
          onChange={ () => dispatch(fetchRecentsNews()) }
          defaultChecked
          name="filter"
          id="recentes"
          type="radio"
        />
      </label>

      <label htmlFor="release">
        Release
        <input
          onChange={ () => dispatch(fetchReleaseAction()) }
          name="filter"
          id="release"
          type="radio"
        />
      </label>

      <label htmlFor="noticia">
        Notícia
        <input
          onChange={ () => dispatch(fetchNoticiasAction()) }
          name="filter"
          id="noticia"
          type="radio"
        />
      </label>

      <Link to="/favorites">Favoritos</Link>
    </nav>
  );
}
