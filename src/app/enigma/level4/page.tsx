"use client"

import { useState } from "react";
import styles from "./page.module.css";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

export default function Level2() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  function handleLogin() {
    if (inputValue === "vocemeachou") {
      Cookie.set("token_level", "level5")
      router.push("/enigma/level5")
    } else{
      alert("Codigo Errado!")
    }
  }

  return (
    <div>
      <div className={styles.divBackground}>
        <h1 className={styles.textTitulo}>Fase 4</h1>
        <div className={styles.divConteudo}>
          <p className={styles.codigo}>
            No labirinto de símbolos e cifras, a chave está guardada,<br></br>
            No bloco B, seu esconderijo, em silêncio é revelado.<br></br>
            Um emaranhado de quadrados, um enigma cifrado,<br></br>
            Ao lado dos recados, está o mistério aguardado.

            <br></br><br></br>nao gosto muito da sala dos livros
          </p>
        </div>
        <div className={styles.divResposta}>
          <input className={styles.inputResposta} type="text" placeholder="Digite a resposta" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <button className={styles.btnEnviar} onClick={handleLogin}>Enviar</button>
        </div>
      </div>
    </div>
  );
}