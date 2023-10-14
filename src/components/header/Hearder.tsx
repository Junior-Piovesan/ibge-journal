import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import useDate from '../../Hooks/useDate';

import profileIcon from '../../assets/profileIcon.svg';

import styles from './header.module.css';
import { ReduxState } from '../../types';

export default function Hearder() {
  const [profile, setProfile] = useState('Profile');
  const { user } = useSelector((state:ReduxState) => state.userReducer);

  const { date } = useDate();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <header className={ styles.header }>
      <section className={ styles.dateContainer }>
        <p className={ styles.date }>{date}</p>
      </section>

      <section className={ styles.titleContainer }>
        <h1 className={ styles.title }>IBGE Journal</h1>
      </section>

      <section className={ styles.profileContainer }>
        <Link className={ styles.link } to="/profile">
          <img className={ styles.img } src={ profileIcon } alt="icone de perfil" />
          {user}
        </Link>
      </section>
    </header>
  );
}
