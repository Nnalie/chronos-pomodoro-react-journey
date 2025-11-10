import styles from "./styles.module.css";

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">; //Intersection -> quando se aplica um '&' para
//concatenar dois objetos de propriedade em um só.

export function DefaultButton({
  icon,
  color = "green",
  ...props /*Representa o restante das propriedades da tipagem acima,
  No caso do tipo React.ComponentProps<'input'>*/
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
