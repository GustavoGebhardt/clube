"use client";

import React from "react";
import enigmaAddName from "./enigma-add-name";
import Style from "../styles/page.module.css";

export default function EnigmaInputName(){
  const [dado, setDado] = React.useState("");
  const [info, setInfo] = React.useState("");
  const [estado, setEstado] = React.useState(false);

  function enviarDado(){
    enigmaAddName(dado).then(resultado => {setInfo(resultado)})
    setDado("Confirmado");
    setEstado(true);
  }

  return(
    <div className={Style.div}>
      <input
        type="text"
        value={dado}
        onChange={(e) => setDado(e.target.value)}
        className={Style.input}
        disabled={estado}
        placeholder="Digite seu nome"></input>
      <button onClick={enviarDado} disabled={estado} className={Style.btn}>Enviar</button>
      <h1 className={Style.info}>{info}</h1>
    </div>
  );
}