import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">; //Intersection -> quando se aplica um '&' para
//concatenar dois objetos de propriedade em um só.

export function DefaultInput({
  id,
  labelText,
  type,
  ...props /*Representa o restante das propriedades da tipagem acima,
  No caso do tipo React.ComponentProps<'input'>*/
}: DefaultInputProps) {
  return (
    <>
      {/* {condicao && valor} equivalente a {condicao ? "true" : ""} */}
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} id={id} type={type} {...props}></input>
    </>
  );
}
