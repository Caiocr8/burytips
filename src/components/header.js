import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { a } from "gatsby"

function Header() {
  return (
    <div 
    style={{
      display: `flex`,
      justifyContent:`center`,
  }}
    >
      <div
        style={{
            zIndex: `20`,
            position: `fixed`,
        }}
      >
        <ul
            style={{
                display: `flex`,
                textAlign: `center`,
                fontSize: `20px`,
                paddingTop: `20px`,
            }}
        >
          <a href="#"
            style={{
                paddingTop: `2px`,
                backgroundColor: `#0EDB69`,
                borderRadius: `10px`,
                width: `122px`,
                height: `38px`,
            }}
          >
            <li style={{fontWeight: `700`,}}>HOME</li>
          </a>
          <a href="#"
            style={{
                marginLeft: `10px`,
                backgroundColor: `#0EDB69`,
                borderRadius: `10px`,
                width: `152px`,
                height: `38px`,
                paddingTop: `2px`,
            }}           
          >
            <li style={{fontWeight: `700`,}}>EMPRESA</li>
          </a>
          <a href="#"            
            style={{
                backgroundColor: `#0EDB69`,
                borderRadius: `10px`,
                width: `122px`,
                height: `38px`,
                paddingTop: `2px`,
                marginLeft: `10px`,
            }}            
          >
            <li style={{fontWeight: `700`,}}>PLANOS</li>
          </a>
          <a href="#"       
            style={{
                backgroundColor: `#0EDB69`,
                borderRadius: `10px`,
                width: `218px`,
                height: `38px`,
                paddingTop: `2px`,
                marginLeft: `10px`,
            }}            
          >
            <li style={{fontWeight: `700`,}}>RENNAN E RAYAN</li>
          </a>
          <a href="#"                 
            style={{
                backgroundColor: `#0EDB69`,
                borderRadius: `10px`,
                width: `300px`,
                height: `38px`,
                paddingTop: `2px`,
                marginLeft: `10px`,
            }}       
          >
            <li style={{fontWeight: `700`,}}>PERGUNTAS FREQUENTES</li>
          </a>
          <a href="#"         
            style={{
                backgroundColor: `#0EDB69`,
                borderRadius: `10px`,
                width: `179px`,
                height: `38px`,
                paddingTop: `2px`,
                marginLeft: `10px`,
            }}          
          >
            <li style={{fontWeight: `700`,}}>RESULTADOS</li>
          </a>
          <a href="#"                      
            style={{
                backgroundColor: `#0EDB69`,
                borderRadius: `10px`,
                width: `219px`,
                height: `38px`,
                paddingTop: `2px`,
                marginLeft: `10px`,
            }}
          >
            <li style={{fontWeight: `700`,}}>FALE CONOSCO</li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Header