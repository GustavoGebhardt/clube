import React from "react";
import EnigmaInputName from "../../../../components/enigma-input-name";
import styles from "./page.module.css";

export default async function Final(){

  return(
      <div className={styles.divBackground}>
        <div className={styles.divCorpo}>
          <p className={styles.text}>Parabéns, você chegou ao final. Estamos ansiosos para te conhecer. Venha participar do Clube de Desenvolvimento de Jogos.<br></br><br></br>Informe seu nome no campo abaixo para receber notícias.<br></br><br></br> Data: 14/06/24<br></br> Local: Laboratorio D8<br></br> Horario: 13:30<br></br><br></br>- C</p>
        </div>
        <EnigmaInputName />
      </div>
  );
}