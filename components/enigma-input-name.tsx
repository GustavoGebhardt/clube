"use client";

import React from "react";
import enigmaAddName from "./enigma-add-name";
import Cookie from "js-cookie";
import Style from "../styles/page.module.css";

export default function EnigmaInputName(){
  const [dado, setDado] = React.useState("");
  const [estado, setEstado] = React.useState(false);

  function enviarDado(){
    enigmaAddName(dado)
    setDado("Confirmado");
    setEstado(true);
    Cookie.remove("token_level")
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
    </div>
  );
}