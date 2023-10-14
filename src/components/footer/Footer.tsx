import { useDispatch } from 'react-redux';
import { countMoreAction } from '../../redux/actions/moreNewsAction';

import styles from './footer.module.css';

export default function Footer() {
  const dispatch = useDispatch();
  return (
    <footer className={ styles.footer }>

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
