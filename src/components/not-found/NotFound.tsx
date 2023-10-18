import Back from '../back/Back';

import styles from './notFound.module.css';

export default function NotFound() {
  return (
    <section className={ styles.container }>
      <Back route="/" />
      <div className={ styles.titleContainer }>
        <h1 className={ styles.title }>Ops! Pagina não encontrada. </h1>
      </div>
    </section>
  );
}
