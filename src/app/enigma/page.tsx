"use client"

import styles from "./page.module.css";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

export default function Enigma() {

  const router = useRouter()

  function handleLogin(){
    Cookie.set("token_level", "level1")
    router.push("/enigma/level1")
  }

  return(
    <div>
      <div className={styles.divBackground}>
        <div className={styles.divInicio}>
          <p className={styles.text}>Olá.<br></br><br></br> Você está diante do maior misterio do IFRS-Campus Feliz.<br></br><br></br> Estamos ansiosos para conhecer os poucos que vão conseguir atravesar todo o caminho.<br></br><br></br> Existe uma mensagem escondida dentro deste enigma.<br></br><br></br> Encontre-a, e ela vai guiar você pela estrada para nos encontrar.<br></br><br></br> Esperamos você do outro lado.<br></br><br></br> Boa sorte!<br></br><br></br> - C</p>
          <button className={styles.btn} onClick={handleLogin}>Iniciar</button>
        </div>
      </div>
    </div>
  );
}