import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={ styles.loadingContainer }>

      <div
        className={ styles.spinner }
      />
      <p className={ styles.messageLoading }>
        Carregando...
      </p>
    </div>
  );
}
