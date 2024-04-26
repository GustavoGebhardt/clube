import React from "react";
import EnigmaInputName from "../../../../components/enigma-input-name";
import styles from "./page.module.css";

export default async function Final(){

  return(
      <div className={styles.divBackground}>
        <h1 className={styles.textTitulo}>Final</h1>
        <EnigmaInputName />
      </div>
  );
}