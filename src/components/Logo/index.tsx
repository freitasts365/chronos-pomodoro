import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

/*Desestructuring the children prop to get the text content of the logo*/

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href="#">
        <TimerIcon />
        Chronos
      </a>
    </div>
  );
}
