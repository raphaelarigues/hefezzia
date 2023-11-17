import { useState } from 'react';
import Logo from "../../assets/hefezzia-logo.png"
import MenuList from "../Menu"
import {listmenu} from "../../data/listmenu"
import styles from "./style.module.css";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function toggleOpen() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
 <header className={styles.header}>
    <img className={styles.background}/>
      <img src={Logo}/>

      <nav className={`${styles.menu} ${isOpen && styles.open}`} onClick={toggleOpen}>
        <button
          aria-label="Abrir / Fechar menu"
          type="button"
          className={styles.menu__icon}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={styles.menu__list}>
   
        {listmenu.map((item) => {
                return(
                    <li key={item.id}>
                        <MenuList  key={item.id} name={item.name} />

                    </li>
            
                )
            })}
        </ul>
      </nav>
    </header>
  );
}