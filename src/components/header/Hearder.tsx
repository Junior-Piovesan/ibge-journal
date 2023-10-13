import useDate from '../../Hooks/useDate';
import styles from './header.module.css';

export default function Hearder() {
  const { date } = useDate();
  return (
    <header className={ styles.header }>
      <section className={ styles.dateContainer }>
        <p className={ styles.date }>{date}</p>
      </section>

      <section className={ styles.titleContainer }>
        <h1 className={ styles.title }>IBGE Journal</h1>
      </section>

      <section className={ styles.profileContainer }>
        perfil
      </section>
    </header>
  );
}
