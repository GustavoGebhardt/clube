"use client"

import { useState } from "react";
import styles from "./page.module.css";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

export default function Level2() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  function handleLogin() {
    if (inputValue === "vocedeveraencontrar") {
      Cookie.set("token_level", "level4")
      router.push("/enigma/level4")
    } else{
      alert("Codigo Errado!")
    }
  }

  return (
    <div>
      <div className={styles.divBackground}>
        <h1 className={styles.textTitulo}>Fase 3</h1>
        <div className={styles.divConteudo}>
          <h1 className={styles.codigo}>yrfhghyhudhqfrqwudu</h1><br></br>
          <h1 className={styles.codigo}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</h1><br></br>
          <h1 className={styles.codigoEscondido}>&larr; 3</h1>
        </div>
        <div className={styles.divResposta}>
          <input className={styles.inputResposta} type="text" placeholder="Digite a resposta" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <button className={styles.btnEnviar} onClick={handleLogin}>Enviar</button>
        </div>
      </div>
    </div>
  );
}