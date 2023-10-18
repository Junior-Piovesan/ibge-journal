import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Dispatch, ReduxState } from '../../types';

import { resetCount } from '../../redux/actions/moreNewsAction';

import styles from './filter.module.css';
import { updateFilterAction } from '../../redux/actions/filterAction';

const MAIS_RECENTES = 'mais-recentes';

export default function Filters() {
  const [checked, setchecked] = useState(MAIS_RECENTES);
  const { error } = useSelector((state:ReduxState) => state.newsReducer);

  const dispatch:Dispatch = useDispatch();

  return (
    <nav
      id="topo"
      className={ error ? styles.navError : styles.nav }
    >

      <label
        className={ checked === MAIS_RECENTES ? styles.labelcheck : styles.label }
        htmlFor="recentes"
      >
        Mais recentes
        <input
          className={ styles.input }
          onChange={ () => {
            dispatch(resetCount());
            dispatch(updateFilterAction('mais-recentes'));
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
            dispatch(updateFilterAction('Release'));
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
            dispatch(updateFilterAction('Notícia'));
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
