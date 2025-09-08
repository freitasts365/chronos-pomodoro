import styles from "./styles.module.css";

type InputProps = {
  id: string;
  labelText?: string;
} & React.InputHTMLAttributes<"input">;

export function Input({ id, type, labelText, ...rest }: InputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText} </label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
