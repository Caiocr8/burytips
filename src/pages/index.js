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
            padding: `20px`,
          }}
        >
          <p 
            style={{
              fontWeight: `400`,
              fontStyle: `Book`,
              fontSize: `23px`,
              align: `justify`,
              verticalAlign: `Top`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
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
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
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
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
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
                fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              }}
            >R$ 300/MÊS</h1>
            <p
              style={{
                paddingTop: `15px`,
                fontSize: `20px`,
                lineHeight: `29px`,
                textAlign: `center`,
                color: `#FFFFFF`,
                fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
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
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
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
                fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              }}
            >R$ 750/MÊSS</h1>
            <p
              style={{
                paddingTop: `15px`,
                fontSize: `20px`,
                lineHeight: `29px`,
                textAlign: `center`,
                color: `#FFFFFF`,
                fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
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
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
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
      display: `grid`,
      justifyContent: `space-between`,
      gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
      }}
      >
      <div
        style={{
          padding: `130px`,
        }}
      >
        <h1
          style={{
            textAlign: `center`,
            width: `687px`,
            height: `76px`,
            fontSize: `64px`,
            lineHeight: `76px`,
            fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            color: `#000000`,

          }}
        >RENAN E RAYAN</h1> 
        <div
          style={{
            marginLeft: `30px`,
            display: `flex`,
            width: `623px`,
            height: `493px`,
            background: `#FFFFFF`,
            borderRadius: `33px`,
            padding: `22px`,
          }}
        >
          <p 
            style={{
              fontWeight: `400`,
              fontStyle: `Book`,
              fontSize: `18.8px`,
              align: `justify`,
              verticalAlign: `Top`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            }}
          >Fundadores da Burityps, Rayan e Renan são irmãos,  residentes em João Pessoa capital da Paraíba. Desde muito cedo inconformados, saíram do interior do estado para a capital em busca de uma vida melhor, e o comércio foi a alternativa encontrada naquele momento. Foram algumas tentativas frustradas ao longo da caminhada até que em um dado momento conheceram as apostas esportivas, a princípio como apostadores recreativos, e assim como acontece para todos eles, o mercado só servia para entreter e lhes tirar uma parcela dos seus ganhos tão  suados,
           que já não eram grandes coisas. Mas diferente da maioria que desiste, ainda como comerciantes, eles enxergaram que ali havia uma oportunidade de faturar ao menos uma renda extra, logo começaram a estudar incansavelmente até desenvolverem métodos que fossem lucrativos, como ainda fazem. </p>
        </div>
      </div>
      <div
        style={{
          marginTop: `100px`,
          marginLeft: `209px`,
        }}
      >
            <StaticImage
              style={{
                marginLeft: `384px`,
              }}
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
              style={{
                marginLeft: `-100px`,
                width: `812px`,
                height: `534px`,
              }}
              src="../images/flamengo.svg"
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
          <h1
            style={{
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              paddingTop: `100px`,
              fontWeight: `500`,
              fontSize: `80px`,
              lineHeight: `57px`,
              textAlign: `center`,
              color: `#FFFFFF`,
            }}
          >EXEMPLOS DE ENTRADA</h1>
        </div>
        <div
          style={{
            marginLeft: `110px`,
            display: `grid`,
            gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(2, minmax(0, 1fr))`,
            padding: `30px`,
          }}
        >
          <div
            style={{
              marginTop: `10px`,
              width: `458.76px`,
              height: `286.47px`,           
              background: `rgba(0, 0, 0, 0.4)`,
              borderRadius: `22px`,
              padding:`10px`,
            }}
          >
            <div
              style={{
                width: `438.62px`,
                height: `37px`,          
                background: `#000000`,
                borderRadius: `18.5px`,
                paddingTop:`8px`,
              }}
            >
              <h1 style={{
                fontSize: `20px`,
                lineHeight: `19px`,                
                textAlign: `center`,              
                color: `#FFFFFF`,   
                fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,          
              }}>EXEMPLO DE HANDCAP ASIÁTICO</h1>
            </div>

            <div
              style={{
                marginTop: `5px`,
                width: `439px`,
                height: `225px`,           
                background: `rgba(0, 0, 0, 0.4)`,
                borderRadius: `22px`,
                padding: `10px`,
              }}
            >
              <p
                style={{
                  fontSize: `17px`,
                  lineHeight: `20px`,
                  textAlign: `justify`,
                  color: `ThreeDLightShadow`,


                }}
              >(1 - 1) FC Zdas Nad Szavou + 2.0 <span style={{fontWeight: `700`, color: `#fff`, }}>1900</span><br/>
              Ao Vivo - HandCap asiático <br />
              Vysocina Jhleave B + (1 - 1) FC Zdas Nad Szavou + 2.0 <br/>
              <span style={{fontWeight: `700`, color: `#fff`, }}>Vysocina Jhleave B | Lateral</span>
              </p>
              <div
                style={{
                  marginTop: `10px`,
                  width: `401px`,
                  height: `1px`,
                  background: `#FFFFFF`,
                }}
              ></div>

              <div
                style={{
                  display: `grid`,
                  gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
                }}
              >
                <p
                  style={{
                    fontSize: `17px`,
                    lineHeight: `20px`,
                    textAlign: `justify`,
                    color: `ThreeDLightShadow`,

                  }}
                >Aposta <br /> <span style={{fontWeight: `700`, color: `#fff`, }}>R$ 500,00</span></p>
                <p
                  style={{
                    fontSize: `17px`,
                    lineHeight: `20px`,
                    textAlign: `justify`,
                    color: `ThreeDLightShadow`,

                  }}
                >Remessa <br /> <span style={{fontWeight: `700`, color: `#fff`, }}>R$ 950,00</span></p>
              </div>
              <button
                type="button"
                style={{
                  marginLeft: `6px`,
                  marginTop: `20px`,  
                  width: `403px`,
                  height: `47px`,
                  background: `#0EDB69`,
                  borderRadius: `10px`,

                }}
              >
                <p 
                  style={{
                    fontSize: `24px`,
                    lineHeight: `118.8%`,
                    color: `#000000`,
                    fontWeight: `800`,
                    fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
                  }}
                >ENCERRAR APOSTA R$ 624,42 </p>
              </button>
            </div>

          </div>
          <div
            style={{
              marginTop: `10px`,
              width: `458.76px`,
              height: `286.47px`,           
              background: `rgba(0, 0, 0, 0.4)`,
              borderRadius: `22px`,
              padding:`10px`,
            }}
          >
            <div
              style={{
                width: `438.62px`,
                height: `37px`,          
                background: `#000000`,
                borderRadius: `18.5px`,
                paddingTop:`8px`,
              }}
            >
              <h1 style={{
                fontSize: `20px`,
                lineHeight: `19px`,                
                textAlign: `center`,              
                color: `#FFFFFF`,   
                fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,          
              }}>EXEMPLO DE HANDCAP ASIÁTICO</h1>
            </div>
            <div
              style={{
                marginTop: `5px`,
                width: `439px`,
                height: `225px`,           
                background: `rgba(0, 0, 0, 0.4)`,
                borderRadius: `22px`,
                padding: `10px`,
              }}
            >
              <p
                style={{
                  fontSize: `17px`,
                  lineHeight: `20px`,
                  textAlign: `justify`,
                  color: `ThreeDLightShadow`,


                }}
              >(1 - 1) FC Zdas Nad Szavou + 2.0 <span style={{fontWeight: `700`, color: `#fff`, }}>1900</span><br/>
              Ao Vivo - HandCap asiático <br />
              Vysocina Jhleave B + (1 - 1) FC Zdas Nad Szavou + 2.0 <br/>
              <span style={{fontWeight: `700`, color: `#fff`, }}>Vysocina Jhleave B | Lateral</span>
              </p>
              <div
                style={{
                  marginTop: `10px`,
                  width: `401px`,
                  height: `1px`,
                  background: `#FFFFFF`,
                }}
              ></div>

              <div
                style={{
                  display: `grid`,
                  gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
                }}
              >
                <p
                  style={{
                    fontSize: `17px`,
                    lineHeight: `20px`,
                    textAlign: `justify`,
                    color: `ThreeDLightShadow`,

                  }}
                >Aposta <br /> <span style={{fontWeight: `700`, color: `#fff`, }}>R$ 500,00</span></p>
                <p
                  style={{
                    fontSize: `17px`,
                    lineHeight: `20px`,
                    textAlign: `justify`,
                    color: `ThreeDLightShadow`,

                  }}
                >Remessa <br /> <span style={{fontWeight: `700`, color: `#fff`, }}>R$ 950,00</span></p>
              </div>
              <button
                type="button"
                style={{
                  marginLeft: `6px`,
                  marginTop: `20px`,  
                  width: `403px`,
                  height: `47px`,
                  background: `#0EDB69`,
                  borderRadius: `10px`,

                }}
              >
                <p 
                  style={{
                    fontSize: `24px`,
                    lineHeight: `118.8%`,
                    color: `#000000`,
                    fontWeight: `800`,
                    fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
                  }}
                >ENCERRAR APOSTA R$ 624,42 </p>
              </button>
            </div>
          </div>
          <div
            style={{
              width: `458.76px`,
              height: `286.47px`,           
              background: `rgba(0, 0, 0, 0.4)`,
              borderRadius: `22px`,
              padding:`10px`,
              marginTop: `10px`,
            }}
          >
            <div
              style={{
                width: `438.62px`,
                height: `37px`,          
                background: `#000000`,
                borderRadius: `18.5px`,
                paddingTop:`8px`,
              }}
            >
              <h1 style={{
                fontSize: `20px`,
                lineHeight: `19px`,                
                textAlign: `center`,              
                color: `#FFFFFF`,   
                fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,          
              }}>EXEMPLOS DE CANTOS HT</h1>
            </div>
            <div
              style={{
                marginTop: `5px`,
                width: `439px`,
                height: `225px`,           
                background: `rgba(0, 0, 0, 0.4)`,
                borderRadius: `22px`,
                padding: `10px`,
              }}
            >
              <p
                style={{
                  fontSize: `17px`,
                  lineHeight: `20px`,
                  textAlign: `justify`,
                  color: `ThreeDLightShadow`,


                }}
              >(1 - 1) FC Zdas Nad Szavou + 2.0 <span style={{fontWeight: `700`, color: `#fff`, }}>1900</span><br/>
              Ao Vivo - HandCap asiático <br />
              Vysocina Jhleave B + (1 - 1) FC Zdas Nad Szavou + 2.0 <br/>
              <span style={{fontWeight: `700`, color: `#fff`, }}>Vysocina Jhleave B | Lateral</span>
              </p>
              <div
                style={{
                  marginTop: `10px`,
                  width: `401px`,
                  height: `1px`,
                  background: `#FFFFFF`,
                }}
              ></div>

              <div
                style={{
                  display: `grid`,
                  gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
                }}
              >
                <p
                  style={{
                    fontSize: `17px`,
                    lineHeight: `20px`,
                    textAlign: `justify`,
                    color: `ThreeDLightShadow`,

                  }}
                >Aposta <br /> <span style={{fontWeight: `700`, color: `#fff`, }}>R$ 500,00</span></p>
                <p
                  style={{
                    fontSize: `17px`,
                    lineHeight: `20px`,
                    textAlign: `justify`,
                    color: `ThreeDLightShadow`,

                  }}
                >Remessa <br /> <span style={{fontWeight: `700`, color: `#fff`, }}>R$ 950,00</span></p>
              </div>
              <button
                type="button"
                style={{
                  marginLeft: `6px`,
                  marginTop: `20px`,  
                  width: `403px`,
                  height: `47px`,
                  background: `#0EDB69`,
                  borderRadius: `10px`,

                }}
              >
                <p 
                  style={{
                    fontSize: `24px`,
                    lineHeight: `118.8%`,
                    color: `#000000`,
                    fontWeight: `800`,
                    fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
                  }}
                >ENCERRAR APOSTA R$ 624,42 </p>
              </button>
            </div>
          </div>
          <div
            style={{
              marginTop: `10px`,
              width: `458.76px`,
              height: `286.47px`,           
              background: `rgba(0, 0, 0, 0.4)`,
              borderRadius: `22px`,
              padding:`10px`,
            }}
          >
            <div
              style={{
                width: `438.62px`,
                height: `37px`,          
                background: `#000000`,
                borderRadius: `18.5px`,
                paddingTop:`8px`,
              }}
            >
              <h1 style={{
                fontSize: `20px`,
                lineHeight: `19px`,                
                textAlign: `center`,              
                color: `#FFFFFF`,   
                fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,          
              }}>EXEMPLO DE HANDCAP ASIÁTICO HT</h1>
            </div>
            <div
              style={{
                marginTop: `5px`,
                width: `439px`,
                height: `225px`,           
                background: `rgba(0, 0, 0, 0.4)`,
                borderRadius: `22px`,
                padding: `10px`,
              }}
            >
              <p
                style={{
                  fontSize: `17px`,
                  lineHeight: `20px`,
                  textAlign: `justify`,
                  color: `ThreeDLightShadow`,


                }}
              >(1 - 1) FC Zdas Nad Szavou + 2.0 <span style={{fontWeight: `700`, color: `#fff`, }}>1900</span><br/>
              Ao Vivo - HandCap asiático <br />
              Vysocina Jhleave B + (1 - 1) FC Zdas Nad Szavou + 2.0 <br/>
              <span style={{fontWeight: `700`, color: `#fff`, }}>Vysocina Jhleave B | Lateral</span>
              </p>
              <div
                style={{
                  marginTop: `10px`,
                  width: `401px`,
                  height: `1px`,
                  background: `#FFFFFF`,
                }}
              ></div>

              <div
                style={{
                  display: `grid`,
                  gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
                }}
              >
                <p
                  style={{
                    fontSize: `17px`,
                    lineHeight: `20px`,
                    textAlign: `justify`,
                    color: `ThreeDLightShadow`,

                  }}
                >Aposta <br /> <span style={{fontWeight: `700`, color: `#fff`, }}>R$ 500,00</span></p>
                <p
                  style={{
                    fontSize: `17px`,
                    lineHeight: `20px`,
                    textAlign: `justify`,
                    color: `ThreeDLightShadow`,

                  }}
                >Remessa <br /> <span style={{fontWeight: `700`, color: `#fff`, }}>R$ 950,00</span></p>
              </div>
              <button
                type="button"
                style={{
                  marginLeft: `6px`,
                  marginTop: `20px`,  
                  width: `403px`,
                  height: `47px`,
                  background: `#0EDB69`,
                  borderRadius: `10px`,

                }}
              >
                <p 
                  style={{
                    fontSize: `24px`,
                    lineHeight: `118.8%`,
                    color: `#000000`,
                    fontWeight: `800`,
                    fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
                  }}
                >ENCERRAR APOSTA R$ 624,42 </p>
              </button>
            </div>
          </div>
          <div
            style={{
              marginTop: `10px`,
              width: `458.76px`,
              height: `286.47px`,           
              background: `rgba(0, 0, 0, 0.4)`,
              borderRadius: `22px`,
              padding:`10px`,
            }}
          >
            <div
              style={{
                width: `438.62px`,
                height: `37px`,          
                background: `#000000`,
                borderRadius: `18.5px`,
                paddingTop:`8px`,
              }}
            >
              <h1 style={{
                fontSize: `20px`,
                lineHeight: `19px`,                
                textAlign: `center`,              
                color: `#FFFFFF`,   
                fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,          
              }}>EXEMPLO DE CANTO EUROPEU HT</h1>
            </div>
            <div
              style={{
                marginTop: `5px`,
                width: `439px`,
                height: `225px`,           
                background: `rgba(0, 0, 0, 0.4)`,
                borderRadius: `22px`,
                padding: `10px`,
              }}
            >
              <p
                style={{
                  fontSize: `17px`,
                  lineHeight: `20px`,
                  textAlign: `justify`,
                  color: `ThreeDLightShadow`,


                }}
              >(1 - 1) FC Zdas Nad Szavou + 2.0 <span style={{fontWeight: `700`, color: `#fff`, }}>1900</span><br/>
              Ao Vivo - HandCap asiático <br />
              Vysocina Jhleave B + (1 - 1) FC Zdas Nad Szavou + 2.0 <br/>
              <span style={{fontWeight: `700`, color: `#fff`, }}>Vysocina Jhleave B | Lateral</span>
              </p>
              <div
                style={{
                  marginTop: `10px`,
                  width: `401px`,
                  height: `1px`,
                  background: `#FFFFFF`,
                }}
              ></div>

              <div
                style={{
                  display: `grid`,
                  gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
                }}
              >
                <p
                  style={{
                    fontSize: `17px`,
                    lineHeight: `20px`,
                    textAlign: `justify`,
                    color: `ThreeDLightShadow`,

                  }}
                >Aposta <br /> <span style={{fontWeight: `700`, color: `#fff`, }}>R$ 500,00</span></p>
                <p
                  style={{
                    fontSize: `17px`,
                    lineHeight: `20px`,
                    textAlign: `justify`,
                    color: `ThreeDLightShadow`,

                  }}
                >Remessa <br /> <span style={{fontWeight: `700`, color: `#fff`, }}>R$ 950,00</span></p>
              </div>
              <button
                type="button"
                style={{
                  marginLeft: `6px`,
                  marginTop: `20px`,  
                  width: `403px`,
                  height: `47px`,
                  background: `#0EDB69`,
                  borderRadius: `10px`,

                }}
              >
                <p 
                  style={{
                    fontSize: `24px`,
                    lineHeight: `118.8%`,
                    color: `#000000`,
                    fontWeight: `800`,
                    fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
                  }}
                >ENCERRAR APOSTA R$ 624,42 </p>
              </button>
            </div>
          </div>
          <div
            style={{
              marginTop: `10px`,
              width: `458.76px`,
              height: `286.47px`,           
              background: `rgba(0, 0, 0, 0.4)`,
              borderRadius: `22px`,
              padding:`10px`,
            }}
          >
            <div
              style={{
                width: `438.62px`,
                height: `37px`,          
                background: `#000000`,
                borderRadius: `18.5px`,
                paddingTop:`8px`,
              }}
            >
              <h1 style={{
                fontSize: `20px`,
                lineHeight: `19px`,                
                textAlign: `center`,              
                color: `#FFFFFF`,   
                fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,          
              }}>EXEMPLO DE CANTO + 0.5 HT</h1>
            </div>
            <div
              style={{
                marginTop: `5px`,
                width: `439px`,
                height: `225px`,           
                background: `rgba(0, 0, 0, 0.4)`,
                borderRadius: `22px`,
                padding: `10px`,
              }}
            >
              <p
                style={{
                  fontSize: `17px`,
                  lineHeight: `20px`,
                  textAlign: `justify`,
                  color: `ThreeDLightShadow`,


                }}
              >(1 - 1) FC Zdas Nad Szavou + 2.0 <span style={{fontWeight: `700`, color: `#fff`, }}>1900</span><br/>
              Ao Vivo - HandCap asiático <br />
              Vysocina Jhleave B + (1 - 1) FC Zdas Nad Szavou + 2.0 <br/>
              <span style={{fontWeight: `700`, color: `#fff`, }}>Vysocina Jhleave B | Lateral</span>
              </p>
              <div
                style={{
                  marginTop: `10px`,
                  width: `401px`,
                  height: `1px`,
                  background: `#FFFFFF`,
                }}
              ></div>

              <div
                style={{
                  display: `grid`,
                  gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
                }}
              >
                <p
                  style={{
                    fontSize: `17px`,
                    lineHeight: `20px`,
                    textAlign: `justify`,
                    color: `ThreeDLightShadow`,

                  }}
                >Aposta <br /> <span style={{fontWeight: `700`, color: `#fff`, }}>R$ 500,00</span></p>
                <p
                  style={{
                    fontSize: `17px`,
                    lineHeight: `20px`,
                    textAlign: `justify`,
                    color: `ThreeDLightShadow`,

                  }}
                >Remessa <br /> <span style={{fontWeight: `700`, color: `#fff`, }}>R$ 950,00</span></p>
              </div>
              <button
                type="button"
                style={{
                  marginLeft: `6px`,
                  marginTop: `20px`,  
                  width: `403px`,
                  height: `47px`,
                  background: `#0EDB69`,
                  borderRadius: `10px`,

                }}
              >
                <p 
                  style={{
                    fontSize: `24px`,
                    lineHeight: `118.8%`,
                    color: `#000000`,
                    fontWeight: `800`,
                    fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
                  }}
                >ENCERRAR APOSTA R$ 624,42 </p>
              </button>
            </div>
          </div>
        </div>
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
        <div>
          <h1
            style={{
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              paddingTop: `100px`,
              fontWeight: `500`,
              fontSize: `80px`,
              lineHeight: `57px`,
              textAlign: `center`,
              color: `#FFFFFF`,
            }}
          >PERGUNTAS FREQUENTES</h1>
        </div>
        <div
          style={{
            display: `grid`,
            gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(6, minmax(0, 1fr))`,
            padding: `50px`,
          }}
        >
            <div
              style={{
                marginTop: `10px`,
                width: `603.4px`,
                height: `48.15px`,              
                background: `rgba(0, 0, 0, 0.7)`,
                borderRadius: `31.297px`,
              }}
            >

            </div>
            <div
              style={{
                marginTop: `10px`,
                width: `603.4px`,
                height: `48.15px`,              
                background: `rgba(0, 0, 0, 0.7)`,
                borderRadius: `31.297px`,
              }}
            >

            </div>
            <div
              style={{
                marginTop: `10px`,
                width: `603.4px`,
                height: `48.15px`,              
                background: `rgba(0, 0, 0, 0.7)`,
                borderRadius: `31.297px`,
              }}
            >

            </div>
            <div
              style={{
                marginTop: `10px`,
                width: `603.4px`,
                height: `48.15px`,              
                background: `rgba(0, 0, 0, 0.7)`,
                borderRadius: `31.297px`,
              }}
            >

            </div>
            <div
              style={{
                marginTop: `10px`,
                width: `603.4px`,
                height: `48.15px`,              
                background: `rgba(0, 0, 0, 0.7)`,
                borderRadius: `31.297px`,
              }}
            >

            </div>
            <div
              style={{
                marginTop: `10px`,
                width: `603.4px`,
                height: `48.15px`,              
                background: `rgba(0, 0, 0, 0.7)`,
                borderRadius: `31.297px`,
              }}
            >

            </div>
            <div
              style={{
                marginTop: `10px`,
                width: `603.4px`,
                height: `48.15px`,              
                background: `rgba(0, 0, 0, 0.7)`,
                borderRadius: `31.297px`,
              }}
            >

            </div>
            <div
              style={{
                marginTop: `10px`,
                width: `603.4px`,
                height: `48.15px`,              
                background: `rgba(0, 0, 0, 0.7)`,
                borderRadius: `31.297px`,
              }}
            >

            </div>
            <div
              style={{
                marginTop: `10px`,
                width: `603.4px`,
                height: `48.15px`,              
                background: `rgba(0, 0, 0, 0.7)`,
                borderRadius: `31.297px`,
              }}
            >

            </div>
            <div
              style={{
                marginTop: `10px`,
                width: `603.4px`,
                height: `48.15px`,              
                background: `rgba(0, 0, 0, 0.7)`,
                borderRadius: `31.297px`,
              }}
            >

            </div>
            <div
              style={{
                marginTop: `10px`,
                width: `603.4px`,
                height: `48.15px`,              
                background: `rgba(0, 0, 0, 0.7)`,
                borderRadius: `31.297px`,
              }}
            >

            </div>
            <div
              style={{
                marginTop: `10px`,
                width: `603.4px`,
                height: `48.15px`,              
                background: `rgba(0, 0, 0, 0.7)`,
                borderRadius: `31.297px`,
              }}
            >

            </div>
        </div>
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
