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
          <img className={styles.imgLogo} src="logo-texto.png"></img>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quos voluptates error facere nesciunt impedit quidem quas sapiente amet porro eveniet ipsam inventore fuga tenetur labore saepe natus debitis sequi!</p>
          <button className={styles.btn} onClick={handleLogin}>Iniciar</button>
        </div>
      </div>
    </div>
  );
}