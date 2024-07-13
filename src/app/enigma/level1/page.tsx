"use client"

import { useState } from "react";
import styles from "./page.module.css";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import getEnv from "../../../../components/get-env";

export default function Level1() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  async function handleLogin() {
    if (inputValue === await getEnv(1)) {
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
          <h1 className={styles.codigo}>Em que século foi comemorado a primeira festa junina?</h1><br></br>
        </div>
        <div className={styles.divResposta}>
          <input className={styles.inputResposta} type="text" placeholder="Digite a resposta" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <button className={styles.btnEnviar} onClick={handleLogin}>Enviar</button>
        </div>
      </div>
    </div>
  );
}