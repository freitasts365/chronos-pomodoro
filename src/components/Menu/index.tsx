import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";

/*Desestructuring the children prop to get the text content of the menu*/

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#">
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <SunIcon />
      </a>
    </nav>
  );
}
