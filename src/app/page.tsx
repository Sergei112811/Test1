import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="page-title">
        <p className={styles.eyebrow}>Москва и Московская область</p>
        <h1 id="page-title">Лендинг аренды грузовых автомобилей готовится</h1>
        <p className={styles.lead}>
          Мы исследуем реальные задачи клиентов и условия аренды, чтобы не публиковать
          неподтверждённые обещания. Скоро здесь появится рабочая версия.
        </p>
        <p className={styles.note}>Технический фундамент подключён. Контент формируется по итогам интервью.</p>
      </section>
    </main>
  );
}
