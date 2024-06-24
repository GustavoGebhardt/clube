"use client"

import { useState } from "react";
import styles from "./page.module.css";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

export default function Level2() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  function handleLogin() {
    if (inputValue === "9799103106109") {
      Cookie.set("token_level", "level6")
      router.push("/enigma/final")
    } else{
      alert("Codigo Errado!")
    }
  }

  return (
    <div>
      <div className={styles.divBackground}>
        <h1 className={styles.textTitulo}>Fase 5</h1>
        <div className={styles.divConteudo}>
          <img className={styles.imgEnigma} src="../localizacao.png" />
          <p className={styles.codigo}></p>
        </div>
        <div className={styles.divResposta}>
          <input className={styles.inputResposta} type="text" placeholder="Digite a resposta" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <button className={styles.btnEnviar} onClick={handleLogin}>Enviar</button>
        </div>
      </div>
    </div>
  );
}