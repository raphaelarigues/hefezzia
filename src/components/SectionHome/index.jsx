import styles from "./style.module.scss";

const SectionHome = () => {
  return (
    <section className={styles.sectionHome}>
      <h1 className={styles.title}>Sistemas Próprios </h1>
      <h1 className={styles.title}>Para empresas Autênticas</h1>
      <p className={styles.paragraphHeader}>
        Tenha um site que reflete a essência do seu negócio e atraia clientes!
        Destaque-se online com um site personalizado!
      </p>
    </section>
  );
};

export default SectionHome;
