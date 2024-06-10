"use client"

import styles from "./page.module.css";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

export default function Enigma() {

  const router = useRouter()

  async function handleLogin(){
    fetch("https://clube-backend.onrender.com/users")
    Cookie.set("token_level", "level1")
    router.push("/enigma/level1")
  }

  return(
    <div>
      <div className={styles.divBackground}>
        <div className={styles.divInicio}>
          <p className={styles.text}>Olá.<br></br><br></br> Você gosta de mistérios?<br></br><br></br>Nós também!<br></br><br></br> Esperamos você do outro lado.<br></br><br></br> Boa sorte!<br></br><br></br> - C</p>
          <button className={styles.btn} onClick={handleLogin}>Iniciar</button>
        </div>
      </div>
    </div>
  );
}