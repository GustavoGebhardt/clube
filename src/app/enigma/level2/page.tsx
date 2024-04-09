"use client"

import { useState } from "react";
import styles from "./page.module.css";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

export default function Level2() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  function handleLogin() {
    if (inputValue === "teste") {
      Cookie.set("token_level", "level3")
      router.push("/enigma/level3")
    } else{
      alert("Codigo Errado!")
    }
  }

  return (
    <div>
      <h1>Fase 2</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleLogin}>Enviar</button>
    </div>
  );
}