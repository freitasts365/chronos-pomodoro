import styles from "./styles.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

/*Desestructuring the children prop to get the text content of the heading*/

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
