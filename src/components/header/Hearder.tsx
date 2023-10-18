import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import profileIcon from '../../assets/profileIcon.svg';

import styles from './header.module.css';
import { ReduxState } from '../../types';
import { currentDate } from '../../utils/currentDate';

export default function Hearder() {
  const { user } = useSelector((state:ReduxState) => state.userReducer);
  const { error } = useSelector((state:ReduxState) => state.newsReducer);

  return (
    <header
      className={ error ? styles.headerError : styles.header }
    >
      <section className={ styles.dateContainer }>
        <p className={ styles.date }>{currentDate()}</p>
      </section>

      <section className={ styles.titleContainer }>
        <h1 className={ styles.title }>IBGE Journal</h1>
      </section>

      <section className={ styles.profileContainer }>

        <Link className={ styles.link } to="/profile">
          <img className={ styles.img } src={ profileIcon } alt="icone de perfil" />
          {user === '' ? 'Login' : user}
        </Link>
      </section>
    </header>
  );
}
