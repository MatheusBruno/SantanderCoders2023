import { useState } from "react";
import styles from "./meucontador.module.css";

export default function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  function zerar() {
    setContador(contador - contador);
  }

  if (contador > 9 || contador < -9) {
    return (
      <>
        <div className={styles.container}>
          {contador < -9 ? (
            <h1>Valor Muito Baixo <span className={styles.containerspan}>{contador}</span></h1>
          ) : (
            <h1>Valor Muito Alto <span className={styles.containerspan}>{contador}</span></h1>
          )}
          {contador > 9 ? <button onClick={aumentar}>Aumentar</button> : null}
          {contador < -9 ? <button onClick={diminuir}>Diminuir</button> : null}
          
          {contador > 9 || contador < -9 ? (
            <button onClick={zerar}>Zerar</button>
          ) : null}
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Contador</h1>

        <p>{contador}</p>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>
      </div>
    </>
  );
}
