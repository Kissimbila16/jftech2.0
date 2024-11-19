"use client";

import { useEffect, useRef } from "react";
import Typed from 'typed.js';

export default function Typed_text({text, clas}){
        const el = useRef(null); // Cria uma referência para o elemento onde o texto será digitado

        useEffect(() => {
            const options = {
                strings: [text], // Strings a serem digitadas
                // strings: ["Hello World!", "Welcome to Next.js!", "Enjoy coding!"], 
                typeSpeed: 50, // Velocidade de digitação
                backSpeed: 50, // Velocidade de apagar
                cursorChar: '',
                // loop: 1 // Se deve repetir o efeito
            };
    
            const typed = new Typed(el.current, options); // Inicializa o Typed.js
            return () => {
                typed.destroy(); // Limpa a instância quando o componente é desmontado
            };
        }, []);

    return(
        <h3 ref={el} style={{fontSize:'8rem'}}>
            {text}
        </h3>
    );
}