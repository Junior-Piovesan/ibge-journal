import { Link, Route } from 'react-router-dom';

import backIcon from '../../assets/backIcon.png';

import styles from './back.module.css';

type PropTypes = {
  route:string
};

export default function Back({ route }:PropTypes) {
  return (
    <Link
      className={ styles.linkBack }
      to={ route }
    >
      <img
        className={ styles.image }
        src={ backIcon }
        alt="voltar"
      />
    </Link>
  );
}
