import useDate from '../../Hooks/useDate';
import styles from './header.module.css';

export default function Hearder() {
  const { date } = useDate();
  return (
    <header>
      <section>
        <p>{date}</p>
      </section>
      <section>
        <h1 className={ styles.title }>IBGE Journal</h1>
      </section>
    </header>
  );
}
