import React from "react";
import EnigmaInputName from "../../../../components/enigma-input-name";
import styles from "./page.module.css";

export default async function Final(){

  return(
      <div className={styles.divBackground}>
        <div className={styles.divCorpo}>
          <p className={styles.text}>Agora para dar o proximo passo!</p>
          <a className={styles.text} href="https://chat.whatsapp.com/FKJTjUcjKmfCQ5J6NqRKRC">Entre aqui</a>
          <p className={styles.text}>- C</p>
        </div>
      </div>
  );
}