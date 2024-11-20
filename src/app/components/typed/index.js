"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Typed_text({ text, clas }) {
  const el = useRef(null); // Cria uma referência para o elemento onde o texto será digitado

  useEffect(() => {
    const options = {
      strings: [text], // Strings a serem digitadas
      typeSpeed: 100, // Velocidade de digitação
      backSpeed: 100, // Velocidade de apagar
      cursorChar: "",
    //   loop: 1 // Se deve repetir o efeito
    };

    const typed = new Typed(el.current, options); // Inicializa o Typed.js
    return () => {
      typed.destroy(); // Limpa a instância quando o componente é desmontado
    };
  }, []);

  return (
    <span ref={el} style={{ fontSize: "4rem" }} className="text-center main-txt">
     <h1>
     {text}
     </h1>
    </span>
  );
}
