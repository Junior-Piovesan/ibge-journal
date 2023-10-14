import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Dispatch } from '../../types';

import { resetCount } from '../../redux/actions/moreNewsAction';
import { fetchReleaseAction } from '../../redux/actions/releaseNewsAction';
import { fetchNoticiasAction } from '../../redux/actions/noticiasNewsAction';

import { fetchRecentsNews } from '../../redux/actions/recentsNewsAction';

import styles from './filter.module.css';

const MAIS_RECENTES = 'mais-recentes';

export default function Filters() {
  const [checked, setchecked] = useState(MAIS_RECENTES);

  const dispatch:Dispatch = useDispatch();

  return (
    <nav id="topo" className={ styles.nav }>

      <label
        className={ checked === MAIS_RECENTES ? styles.labelcheck : styles.label }
        htmlFor="recentes"
      >
        Mais recentes
        <input
          className={ styles.input }
          onChange={ () => {
            dispatch(resetCount());
            dispatch(fetchRecentsNews());
            setchecked(MAIS_RECENTES);
          } }
          defaultChecked
          name="filter"
          id="recentes"
          type="radio"
        />
      </label>

      <label
        className={ checked === 'release' ? styles.labelcheck : styles.label }
        htmlFor="release"
      >
        Release
        <input
          className={ styles.input }
          onChange={ () => {
            dispatch(resetCount());
            dispatch(fetchReleaseAction());
            setchecked('release');
          } }
          name="filter"
          id="release"
          type="radio"
        />
      </label>

      <label
        className={ checked === 'noticia' ? styles.labelcheck : styles.label }
        htmlFor="noticia"
      >
        Notícia
        <input
          className={ styles.input }
          onChange={ () => {
            dispatch(resetCount());
            dispatch(fetchNoticiasAction());
            setchecked('noticia');
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
