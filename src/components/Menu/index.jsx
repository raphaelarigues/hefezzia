import styles from "./style.module.scss";

const MenuList = ({ name }) => {
  return (
    <div className={styles.listCard}>
      <p>{name}</p>
    </div>
  );
};

export default MenuList;
