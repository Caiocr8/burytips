import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import bg1 from "../images/bg1.png"
import bg2 from "../images/bg2.png"
import bg3 from "../images/bg3.png"
import bg4 from "../images/bg4.png"
import bg5 from "../images/bg5.png"
import bg6 from "../images/bg6.png"
import bg7 from "../images/bg7.png"
import Header from "../components/header"

const IndexPage = () => (
  <div class="  ">
    <section
      class=" "
      style={{ backgroundImage: `url(${bg1})`,
      width: `100%`,
      height: `100vh`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundAttachment: `local`,
    }}
    >
    <title>BURYTIPS</title>
    <link rel="icon" href="..\images\logo.png"/>
    <Header></Header>

        <div
          style={{
            paddingTop: `300px`,
            paddingLeft: `100px`,
          }}
        >
          <StaticImage
            src="../images/logo.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
        <div 
          style={{
            width: `596.55px`,
            height: `60.75px`,
          }}
        >
          <h1 style={{
            fontSize: `31px`,
            lineHeight: `29px`,     
            color: `#FFFFFF`,
            fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            fontWeight: `700`,
            paddingTop: `10px`,
            paddingLeft: `100px`,
            letterSpacing: `0.1em`,
          }}>CONSULTORIA PROFISSIONAL <br /> EM APOSTAS ESPORTIVAS</h1>
        </div>

        <div>
          <button>
            <StaticImage
                src="../images/wpp.svg"
                quality={100}
                placeholder="blurred"
                layout="fixed"
              />
          </button>   
        </div>
        <div
          
        >
          <div
            style={{
              float: `right`,
            }}
          >
            <StaticImage
              src="../images/azul.png"
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />
          </div>
          <div
            style={{
              float: `right`,
              marginRight: `-211px`,
              marginTop: `-70px`,
            }}
          >  
            <StaticImage
              src="../images/burityps.png"
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />
          </div>  
        </div>    
    </section>
    <section         
      style={{ backgroundImage: `url(${bg2})`,
      width: `100%`,
      height: `100vh`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundAttachment: `local`,
      }}   
      >
        <div>
            <StaticImage
              src="../images/carvao.png"
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />
          <div
            style={{
              marginTop: `-600px`,
            }}
          >
            <StaticImage
              src="../images/humanos.svg"
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />
          </div>
        </div>
        
        <div
          style={{
            marginTop: `-350px`,
            marginRight: `400px`,
            display: `flex`,
            float: `right`,
            width: `623px`,
            height: `493px`,
            background: `#FFFFFF`,
            borderRadius: `33px`,
            padding: `30px`,
          }}
        >
          <p 
            style={{
              fontWeight: `400`,
              fontStyle: `Book`,
              fontSize: `24px`,
              align: `justify`,
              verticalAlign: `Top`,
            }}
          >O mundo das Apostas Esportivas definitivamente não é para amadores e a Burityps surge com o propósito de ajudar quem quer trabalhar de forma profissional e se tornar um apostador com um lucro consistente.
Nossos profissionais se dedicam 24 horas 7 dias por semana para entregar o melhor resultado possível para nossa família, e sim, somos uma grande família que cresce a cada dia. Resultado disso são  centenas de vidas transformadas ao longo de mais de um ano de serviços prestados, sempre com os pés no chão e passando nossa visão pra quem nos segue e isso não tem preço.</p>
        </div>
    </section>
    <section 
      style={{ backgroundImage: `url(${bg3})`,
      width: `100%`,
      height: `100vh`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundAttachment: `local`,
      }}
      >
        <div class="flex flex-col items-center"
          style={{
            paddingTop: `250px`, 
          }}
        >
          <h1
            style={{  
              width: `880px`,
              height: `152px`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              fontSize: `80px`,
              lineHeight: `118.8%`,
              fontWeight: `800`,
              textAlign: `center`,
              color: `#000000`,
            }}
          >CONFIRA A MATÉRIA QUE SAIU NO UOL</h1>
          <p
            style={{
              paddingTop: `50px`,
              fontStyle:`normal`,
              fontWeight:`normal`,
              fontSize: `24px`,
              lineHeight: `118.8%`,          
              textAlign: `center`,          
              color: `#4D4D4D`,
            }}
            
          >Conheça os irmãos Rayan Burity e Renan Burity, responsáveis pela <br /> consultoria que está aterrorizando as casas de apostas do Brasil</p>

        <button
          type="button"
          style={{
            marginTop:`60px`,
            width: `632px`,
            height: `60px`,
            background: `#0EDB69`,
            borderRadius: `16px`,
          }}
        >
          <p 
            style={{
              fontSize: `24px`,
              lineHeight: `118.8%`,
              textAlign: `center`,
              color: `#000000`,
              fontWeight: `800`,
            }}
          >| CLIQUE E CONFIRA A MATÉRIA |</p>
        </button>
        </div>
    </section>
    <section 
      style={{ backgroundImage: `url(${bg4})`,
      width: `100%`,
      height: `100vh`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundAttachment: `local`,
      }}
      >
        <h1
          style={{
            textAlign: `center`,
            letterSpacing: `0.05em`,
            fontWeight: `800`,
            fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            fontSize: `100px`,
            color: `#FFFFFF`,
            paddingTop: `200px`, 
          }}
        >CONFIRA NOSSOS PLANOS</h1>

        <div class="grid grid-cols-2 grid-rows-1 ">
          <div
            style={{
              marginTop: `80px`,
              width: `543px`,
              height: `264px`,
              background: `rgba(0, 0, 0, 0.4)`,
              borderRadius: `22px`,
              marginLeft: `350px`,
            }}
          >
            <h1
              style={{
                fontSize: `36px`,
                lineHeight: `43px`,
                textAlign: `center`,
                color: `#0EDB69`,
                fontWeight: `700`,
                paddingTop:`20px`,
              }}
            >R$ 300/MÊS</h1>
            <p
              style={{
                paddingTop: `15px`,
                fontSize: `20px`,
                lineHeight: `29px`,
                textAlign: `center`,
                color: `#FFFFFF`,
              }}
            >Média de lucro é superior a <br /> 50% da banca investida</p>
        <button
          type="button"
          style={{
            marginLeft: `12px`,
            marginTop:`20px`,
            width: `517px`,
            height: `70px`,
            background: `#0EDB69`,
            borderRadius: `16px`,

          }}
        >
          <p 
            style={{
              fontSize: `24px`,
              lineHeight: `118.8%`,
              color: `#000000`,
              fontWeight: `800`,
            }}
          >| ASSINAR AGORA |</p>
        </button>
          </div>
          <div
            style={{
              marginTop: `80px`,
              width: `543px`,
              height: `264px`,
              background: `rgba(0, 0, 0, 0.4)`,
              borderRadius: `22px`,
            }}
          >
            <h1
              style={{
                fontSize: `36px`,
                lineHeight: `43px`,
                textAlign: `center`,
                color: `#0EDB69`,
                fontWeight: `700`,
                paddingTop:`20px`,
              }}
            >R$ 750/MÊSS</h1>
            <p
              style={{
                paddingTop: `15px`,
                fontSize: `20px`,
                lineHeight: `29px`,
                textAlign: `center`,
                color: `#FFFFFF`,
              }}
            >Média de lucro é superior a <br /> 80% da banca investida</p>
        <button
          type="button"
          style={{
            marginLeft: `12px`,
            marginTop:`20px`,
            width: `517px`,
            height: `70px`,
            background: `#0EDB69`,
            borderRadius: `16px`,

          }}
        >
          <p 
            style={{
              fontSize: `24px`,
              lineHeight: `118.8%`,
              color: `#000000`,
              fontWeight: `800`,
            }}
          >| ASSINAR AGORA |</p>
        </button>
          </div>
        </div>

    </section>
    <section 
      style={{ backgroundImage: `url(${bg5})`,
      width: `100%`,
      height: `100vh`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundAttachment: `local`,
      }}
      >
      
    </section>
    <section 
      style={{ backgroundImage: `url(${bg2})`,
      width: `100%`,
      height: `100vh`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundAttachment: `local`,
      }}
      >
      
    </section>
    <section 
      style={{ backgroundImage: `url(${bg6})`,
      width: `100%`,
      height: `100vh`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundAttachment: `local`,
      }}
      >
      
    </section>
    <section 
      style={{ backgroundImage: `url(${bg7})`,
      width: `100%`,
      height: `100vh`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundAttachment: `local`,
      }}
      >
      
    </section>
  </div>  
)
export default IndexPage
