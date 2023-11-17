import CheckboxDSU from "../../components/CheckboxDSU";
import Contact from "../../components/Contact";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import SectionEquip from "../../components/SectionEquip";
import SectionHome from "../../components/SectionHome";
import styles from "./style.module.scss";
const HomePage = () => {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <SectionHome />
      </main>
      <CheckboxDSU />
      <SectionEquip />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
