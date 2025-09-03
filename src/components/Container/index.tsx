import styles from "./styles.module.css";

type ContentProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContentProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
