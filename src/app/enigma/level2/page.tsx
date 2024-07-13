"use client"

import { useState } from "react";
import styles from "./page.module.css";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import getEnv from "../../../../components/get-env";

export default function Level2() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  async function handleLogin() {
    if (inputValue === await getEnv(2)) {
      Cookie.set("token_level", "level3")
      router.push("/enigma/level3")
    } else{
      alert("Codigo Errado!")
    }
  }

  return (
    <div>
      <div className={styles.divBackground}>
        <h1 className={styles.textTitulo}>Fase 2</h1>
        <div className={styles.divConteudo}>
          <h1 className={styles.codigo}>Zé das Couves, caipira de nascença, deu azar ao perder sua chave enquanto usava os banheiros do bloco B na festa da cidade. Com sua inseparável palha no dente, Zé das Couves percebeu que a chave perdida era a única maneira de acessar o antigo baú de sua família, que guardava um tesouro lendário. Desanimado por não encontrá-la, ele decidiu confiar no destino, contando histórias e receitas da sua avó para os amigos enquanto esperava a sorte sorrir novamente.</h1><br></br>
        </div>
        <div className={styles.divResposta}>
          <input className={styles.inputResposta} type="text" placeholder="Digite a resposta" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <button className={styles.btnEnviar} onClick={handleLogin}>Enviar</button>
        </div>
      </div>
    </div>
  );
}