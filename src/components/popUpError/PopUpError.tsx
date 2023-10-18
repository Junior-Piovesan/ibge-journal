import { pageReload } from '../../utils/pageReload';
import styles from './popUpError.module.css';

export default function PopUpError() {
  return (
    <section className={ styles.container }>
      <h1 className={ styles.title }>Encontramos um problema!</h1>
      <p className={ styles.message }>Recarregue a página e verifique sua conexão.</p>
      <button
        onClick={ pageReload }
        className={ styles.button }
      >
        Recarregar
      </button>
    </section>
  );
}
