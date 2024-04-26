import React from "react";
import EnigmaInputName from "../../../../components/enigma-input-name";
import styles from "./page.module.css";

export default async function Final(){

  return(
      <div className={styles.divBackground}>
        <div className={styles.divCorpo}>
          <p className={styles.text}>Parabens, você chegou ao final. Como mencionamos, estamos ansiosos para conhecer os poucos que chegaram até aqui. Portanto vamos precisar conhecer você pessoalemnte.<br></br><br></br>Informe seu nome no campo abaixo para garantir sua vaga.<br></br><br></br> Data: 03/05/24<br></br> Local: Laboratorio D8<br></br> Horario: 13:30<br></br><br></br>- C</p>
        </div>
        <EnigmaInputName />
      </div>
  );
}