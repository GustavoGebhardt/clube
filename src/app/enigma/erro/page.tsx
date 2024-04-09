"use client"

import styles from "./page.module.css";

export default function Erro(){
  return(
    <div>
      <div className={styles.divBackground}>
        <div className={styles.divConjunto}>
          <h1 className={styles.textTitulo}>404🃏</h1>
          <a className={styles.link} href="/enigma">Voltar</a>
        </div>
      </div>
    </div>
  );
}