import React from "react";

function Header() {
  return (
    <ul
      style={{
        display: `flex`,
        fontSize: `1.5vw`,
        padding: `2vw`,
        fontWeight: `700`,
        justifyContent: `space-between`,
        position: `absolute`,
        width: `100%`,
      }}
    >
      <a
        href="#home"
        style={{
          padding: `1vh`,
          backgroundColor: `#0EDB69`,
          borderRadius: `10px`,
        }}
      >
        <li>HOME</li>
      </a>
      <a
        href="#empresa"
        style={{
          padding: `1vh`,
          backgroundColor: `#0EDB69`,
          borderRadius: `10px`,
        }}
      >
        <li style={{ fontWeight: `700` }}>EMPRESA</li>
      </a>
      <a
        href="#planos"
        style={{
          padding: `1vh`,
          backgroundColor: `#0EDB69`,
          borderRadius: `10px`,
        }}
      >
        <li style={{ fontWeight: `700` }}>PLANOS</li>
      </a>
      <a
        href="#rr"
        style={{
          padding: `1vh`,
          backgroundColor: `#0EDB69`,
          borderRadius: `10px`,
        }}
      >
        <li style={{ fontWeight: `700` }}>RENNAN E RAYAN</li>
      </a>
      <a
        href="#perguntas"
        style={{
          padding: `1vh`,
          backgroundColor: `#0EDB69`,
          borderRadius: `10px`,
        }}
      >
        <li style={{ fontWeight: `700` }}>PERGUNTAS FREQUENTES</li>
      </a>
      <a
        href="#resultados"
        style={{
          padding: `1vh`,
          backgroundColor: `#0EDB69`,
          borderRadius: `10px`,
        }}
      >
        <li style={{ fontWeight: `700` }}>RESULTADOS</li>
      </a>
      <a
        href="#fale"
        style={{
          padding: `1vh`,
          backgroundColor: `#0EDB69`,
          borderRadius: `10px`,
        }}
      >
        <li style={{ fontWeight: `700` }}>FALE CONOSCO</li>
      </a>
    </ul>
  );
}

export default Header;
