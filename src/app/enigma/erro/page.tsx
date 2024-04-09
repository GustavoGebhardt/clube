"use client"

import styles from "./page.module.css";

export default function Erro(){
  return(
    <div>
      <div className={styles.divBackground}>
        <h1 className={styles.textTitulo}>Erro</h1>
        <a href="/enigma">Voltar</a>
      </div>
    </div>
  );
}