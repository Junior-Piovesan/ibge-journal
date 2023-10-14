import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Dispatch } from '../../types';

import { resetCount } from '../../redux/actions/moreNewsAction';
import { fetchReleaseAction } from '../../redux/actions/releaseNewsAction';
import { fetchNoticiasAction } from '../../redux/actions/noticiasNewsAction';

import { fetchRecentsNews } from '../../redux/actions/recentsNewsAction';

import styles from './filter.module.css';

export default function Filters() {
  const dispatch:Dispatch = useDispatch();

  return (
    <nav id="topo" className={ styles.nav }>

      <label className={ styles.label } htmlFor="recentes">
        Mais recentes
        <input
          className={ styles.input }
          onChange={ () => {
            dispatch(resetCount());
            dispatch(fetchRecentsNews());
          } }
          defaultChecked
          name="filter"
          id="recentes"
          type="radio"
        />
      </label>

      <label className={ styles.label } htmlFor="release">
        Release
        <input
          className={ styles.input }
          onChange={ () => {
            dispatch(resetCount());
            dispatch(fetchReleaseAction());
          } }
          name="filter"
          id="release"
          type="radio"
        />
      </label>

      <label className={ styles.label } htmlFor="noticia">
        Notícia
        <input
          className={ styles.input }
          onChange={ () => {
            dispatch(resetCount());
            dispatch(fetchNoticiasAction());
          } }
          name="filter"
          id="noticia"
          type="radio"
        />
      </label>

      <Link className={ styles.link } to="/favorites">Favoritos</Link>
    </nav>
  );
}
