import { useDispatch, useSelector } from 'react-redux';
import { countMoreAction } from '../../redux/actions/moreNewsAction';

import styles from './footer.module.css';
import { ReduxState } from '../../types';

export default function Footer() {
  const dispatch = useDispatch();
  const { error } = useSelector((state:ReduxState) => state.newsReducer);

  return (
    <footer
      className={ error ? styles.footerError : styles.footer }
    >

      <button
        onClick={ () => { dispatch(countMoreAction()); } }
        className={ styles.button }
      >
        Ver mais notícias
      </button>

      <a className={ styles.link } href="#topo">Voltar ao topo</a>

    </footer>
  );
}
