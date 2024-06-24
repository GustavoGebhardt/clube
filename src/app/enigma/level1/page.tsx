"use client"

import { useState } from "react";
import styles from "./page.module.css";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

export default function Level1() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  function handleLogin() {
    if (inputValue === "estamosdevolta") {
      Cookie.set("token_level", "level2")
      router.push("/enigma/level2")
    } else{
      alert("Codigo Errado!")
    }
  }

  return (
    <div>
      <div className={styles.divBackground}>
        <h1 className={styles.textTitulo}>Fase 1</h1>
        <div className={styles.divConteudo}>
          <h1 className={styles.codigo}>33 7777 8 2 6 666 7777 3 33 888 666 555 8 2</h1><br></br>
          <img className={styles.imgTel} src="../telefone.png"/>
        </div>
        <div className={styles.divResposta}>
          <input className={styles.inputResposta} type="text" placeholder="Digite a resposta" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <button className={styles.btnEnviar} onClick={handleLogin}>Enviar</button>
        </div>
      </div>
    </div>
  );
}