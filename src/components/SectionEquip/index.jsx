import Equip from "../../assets/equip.png";
import styles from "./style.module.scss";
import CeoJPO from "../../assets/ceo-jpo.jpeg";
const SectionEquip = () => {
  return (
    <section className={styles.containerEquip}>
      <div>
        <div className={`${styles.infoEquip} container`}>
          <h1>Desenvolvido de Pessoas para Pessoas</h1>
          <p>
            Nossa abordagem coloca você no centro do projeto. Criamos soluções
            personalizadas que se encaixam no que você precisa. Queremos que sua
            experiência seja incrível, e estamos prontos para criar algo que
            realmente conecte com seu público e traga resultados incríveis para
            você. Vamos juntos construir algo que realmente faça a diferença!
          </p>
          <img className={styles.imgEquip} src={Equip} />
        </div>

        <div className={styles.boxInfoDevelop}>
          <div className={styles.background}>
            <div>
              <div
                className={`${styles.boxWeTeam} flex flex-col w-full p-4 sm:p-10 gap-4 justify-center `}
              >
                <h1>Nosso time</h1>
                <p>
                  Conheça nossa equipe dedicada a criar soluções digitais
                  excepcionais. Com especialistas em diversas áreas, trabalhamos
                  em conjunto para transformar ideias em resultados de
                  excelência. Estamos comprometidos em elevar a sua presença
                  online. Conheça a equipe por trás do sucesso!
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.boxCeo} flex flex-col w-full p-3 sm:p-10 gap-4 justify-center   `}
          >
            <div className={styles.boxTitle}>
              <h1>João Pedro Oliveira</h1>
              <img className={styles.imgCeoJPO} src={CeoJPO} />
              <p>CEO/Developer</p>
            </div>
            <p>
              Liderando com visão, João não apenas guia nossa equipe, mas também
              é um desenvolvedor talentoso. Ele traz anos de experiência para o
              desenvolvimento de projetos inovadores, combinando habilidades de
              liderança com conhecimento técnico para impulsionar nosso sucesso.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Equipe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEquip;
