import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import bg1 from "../images/bg1.png";
import bg2 from "../images/bg2.png";
import bg3 from "../images/bg3.png";
import bg4 from "../images/bg4.png";
import bg5 from "../images/bg5.png";
import bg6 from "../images/bg6.png";
import bg7 from "../images/bg7.png";
import Header from "../components/header";
import carvao from "../images/carvao.png";
import Wpp from "../components/wpp";
import styled from "styled-components";
import Menu from "../components/menu";

const Section1 = styled.section`
	background-image: url(${bg1});
	width: 100%;
	height: 60vw;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: local;
	background-position: center;
	@media only screen and (max-width: 1000px) {
		height: 60vh;
	}
`;

const Section2 = styled.section`
	background-image: url(${bg2});
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: local;
	background-position: center;
	@media only screen and (max-width: 1000px) {
		height: 60vh;
	}
`;

const Flex = styled.div`
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 1500px) {
		flex-direction: column;
	}
`;

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 1500px) and (min-width: 1000px) {
		flex-direction: row;
	}
`;

const Flex1100 = styled.div`
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 1100px) {
		flex-direction: column;
	}
`;

const Text1 = styled.p`
	width: 100%;
	text-align: left;
	font-size: 2vw;
	line-height: 2ch;
	color: #ffffff;
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
		Consolas, "Liberation Mono", "Courier New", monospace;
	font-weight: 700;
	padding-top: 1vw;
	letter-spacing: 0.3ch;
	@media only screen and (max-width: 1000px) {
		font-size: 1rem;
	}
`;

const Text2 = styled.p`
	color: gray;
	background: #ffffff;
	border-radius: 33px;
	margin: 5vw;
	padding: 3vw;
	font-weight: 400;
	font-style: Book;
	font-size: 2em;
	letter-spacing: 1ex;
	line-height: 2ex;
	text-align: justify;
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
		Consolas, "Liberation Mono", "Courier New", monospace;
	@media only screen and (max-width: 1000px) and (min-width: 600px) {
		font-size: 1.8em;
	}
	@media only screen and (max-width: 600px) and (min-width: 400px) {
		font-size: 1.5em;
	}
`;

const TextMateria = styled.p`
	text-align: center;
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
		Consolas, "Liberation Mono", "Courier New", monospace;
	font-size: 8vw;
	line-height: 1em;
	font-weight: 800;
	color: #000;
	padding-bottom: 3vw;
	max-width: 50vw;
	@media only screen and (max-width: 500px) {
		font-size: 1.8em;
	}
`;

const TextMateria2 = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 118.8%;
	text-align: center;
	color: #4d4d4d;
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
		Consolas, "Liberation Mono", "Courier New", monospace;
	font-size: 1.8em;
	@media only screen and (max-width: 500px) {
		font-size: 1.5em;
	}
`;

const Pergunta = styled.a`
margin:2vw;
	width: 44vw;
	background: rgba(0, 0, 0, 0.7);
	border-radius: 31.297px;
	padding: 1em;
	font-size: 1.5em;
	line-height: 19px;
	color: #ffffff;
	font-weight: 800px;
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
		Consolas, "Liberation Mono", "Courier New", monospace;
	${Pergunta}:focus & {
		background: rgba(152, 152, 152, 0.7);
	}
`;

const Resposta = styled.p`
	visibility: hidden;
	height: 0px;
	${Pergunta}:focus & {
		visibility: visible;
		width: 100%;
		background: rgba(0, 0, 0, 0.7);
		border-radius: 31.297px;
		padding: 1em;
		font-size: 1em;
		line-height: 19px;
		font-weight: 800px;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
			Consolas, "Liberation Mono", "Courier New", monospace;
		display: flex;
		flex-direction: column;
		text-align: center;
		transition: pading 0.5s;
	}
`;

const Whatsapp = styled.button`
	@media only screen and (max-width: 600px) {
		visibility: hidden;
	}
`;

const IndexPage = () => (
	<div>
		<title style={{}}>BURYTIPS</title>
		<link rel="icon" href="..\images\logo.png" />
		<Wpp />
		<Header />
		<Menu />
		<Section1 id="home">
			{" "}
			<StaticImage
				style={{
					position: `absolute`,
					top: `55vw`,
					marginTop: `2vw`,
					right: `0px`,
					marginLeft: `3vw`,
					height: `40vh`,
					width: `18vh`,
				}}
				src="../images/azul.png"
				quality={100}
				placeholder="blurred"
			/>
			<StaticImage
				style={{
					position: `absolute`,
					top: `53vw`,
					marginTop: `2vw`,
					right: `0px`,
					marginLeft: `2vw`,
					height: `40vh`,
					width: `16vh`,
				}}
				src="../images/burityps.png"
				quality={100}
				placeholder="blurred"
			/>
			<div
				style={{
					display: `flex`,
					flexDirection: `column`,
					alignItems: `center`,
					paddingTop: `20vw`,
					marginLeft: `14vw`,
					justifyContent: `center`,
					width: `34vw`,
				}}>
				<StaticImage
					src="../images/logo.svg"
					quality={100}
					style={{
						width: `34vw`,
						height: `25vw`,
						zIndex: `4`,
					}}
					placeholder="blurred"
					layout="fixed"
				/>
				<Text1>
					CONSULTORIA PROFISSIONAL <br /> EM APOSTAS
					ESPORTIVAS
				</Text1>
			</div>
		</Section1>
		<Section2 id="empresa">
			<Flex
				style={{
					paddingTop: `50vh`,
					paddingBottom: `20vh`,
					width: `100%`,
				}}>
				<div
					style={{
						backgroundImage: `url(${carvao})`,
						backgroundSize: `cover`,
						backgroundAttachment: `local`,
						backgroundPosition: `center`,
						height: `60vh`,
						width: `40%`,
					}}>
					<StaticImage
						style={{
							marginTop: `5vw`,
							marginBottom: `10vw`,
							height: `50vh`,
							marginLeft: `4vw`,
							width: `90%`,
						}}
						src="../images/humanos.svg"
						quality={100}
						placeholder="blurred"
						layout="fixed"
					/>
				</div>
				<Text2>
					O mundo das Apostas Esportivas definitivamente não
					é para amadores e a Burityps surge com o propósito
					de ajudar quem quer trabalhar de forma
					profissional e se tornar um apostador com um lucro
					consistente. Nossos profissionais se dedicam 24
					horas 7 dias por semana para entregar o melhor
					resultado possível para nossa família, e sim,
					somos uma grande família que cresce a cada dia.
					Resultado disso são centenas de vidas
					transformadas ao longo de mais de um ano de
					serviços prestados, sempre com os pés no chão e
					passando nossa visão pra quem nos segue e isso não
					tem preço.
				</Text2>
			</Flex>
		</Section2>
		<section
			style={{
				display: `flex`,
				backgroundImage: `url(${bg3})`,
				width: `100%`,
				backgroundRepeat: `no-repeat`,
				backgroundSize: `cover`,
				backgroundAttachment: `local`,
				backgroundPosition: `center`,
				placeContent: `center`,
				placeItems: `center`,
			}}>
			<div
				style={{
					paddingTop: `20vh`,
					paddingBottom: `20vh`,
					display: `flex`,
					flexDirection: "column",
					alignItems: `center`,
				}}>
				<TextMateria>
					CONFIRA A MATÉRIA QUE SAIU NO UOL
				</TextMateria>
				<TextMateria2>
					Conheça os irmãos Rayan Burity e Renan Burity,
					responsáveis pela <br /> consultoria que está
					aterrorizando as casas de apostas do Brasil
				</TextMateria2>
				<button
					type="button"
					style={{
						marginTop: `60px`,
						width: `50vw`,
						minWidth: `400px`,
						height: `60px`,
						background: `#0EDB69`,
						borderRadius: `16px`,
						fontSize: `2ch`,
						lineHeight: `118.8%`,
						textAlign: `center`,
						color: `#000000`,
						fontWeight: `800`,
						fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
					}}>
					| CLIQUE E CONFIRA A MATÉRIA |
				</button>
			</div>
		</section>
		<section
			id="planos"
			style={{
				backgroundImage: `url(${bg4})`,
				width: `100%`,
				backgroundRepeat: `no-repeat`,
				backgroundSize: `cover`,
				backgroundAttachment: `local`,
				backgroundPosition: `center`,
			}}>
			<h1
				style={{
					textAlign: `center`,
					letterSpacing: `0.05em`,
					fontWeight: `800`,
					fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
					fontSize: `100px`,
					color: `#FFFFFF`,
					paddingTop: `10vh`,
				}}>
				CONFIRA NOSSOS PLANOS
			</h1>

			<div
				style={{
					display: `flex`,
					flexDirection: `row`,
					justifyContent: `space-around`,
				}}>
				<div
					style={{
						padding: `2vw`,
						display: `flex`,
						flexDirection: `column`,
						margin: `5vh`,
						background: `rgba(0, 0, 0, 0.4)`,
						borderRadius: `22px`,
						justifyContent: `center`,
					}}>
					<h1
						style={{
							fontSize: `36px`,
							lineHeight: `43px`,
							textAlign: `center`,
							color: `#0EDB69`,
							fontWeight: `700`,
							paddingTop: `20px`,
							fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
						}}>
						R$ 300/MÊS
					</h1>
					<p
						style={{
							paddingTop: `15px`,
							fontSize: `20px`,
							lineHeight: `29px`,
							textAlign: `center`,
							color: `#FFFFFF`,
							fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
						}}>
						Média de lucro é superior a <br /> 50% da banca
						investida
					</p>
					<button
						type="button"
						style={{
							textAlign: `center`,
							marginTop: `20px`,
							width: `100%`,
							height: `70px`,
							background: `#0EDB69`,
							borderRadius: `16px`,
							fontSize: `24px`,
							lineHeight: `118.8%`,
							color: `#000000`,
							fontWeight: `800`,
							fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
						}}>
						| ASSINAR AGORA |
					</button>
				</div>
				<div
					style={{
						padding: `2vw`,
						display: `flex`,
						flexDirection: `column`,
						margin: `5vh`,
						background: `rgba(0, 0, 0, 0.4)`,
						borderRadius: `22px`,
						justifyContent: `center`,
					}}>
					<h1
						style={{
							fontSize: `36px`,
							lineHeight: `43px`,
							textAlign: `center`,
							color: `#0EDB69`,
							fontWeight: `700`,
							paddingTop: `20px`,
							fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
						}}>
						R$ 750/MÊSS
					</h1>
					<p
						style={{
							paddingTop: `15px`,
							fontSize: `20px`,
							lineHeight: `29px`,
							textAlign: `center`,
							color: `#FFFFFF`,
							fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
						}}>
						Média de lucro é superior a <br /> 80% da banca
						investida
					</p>
					<button
						type="button"
						style={{
							marginTop: `20px`,
							width: `100%`,
							height: `70px`,
							background: `#0EDB69`,
							borderRadius: `16px`,
							fontSize: `24px`,
							lineHeight: `118.8%`,
							color: `#000000`,
							fontWeight: `800`,
							fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
						}}>
						| ASSINAR AGORA |
					</button>
				</div>
			</div>
		</section>
		<section
			id="rr"
			style={{
				backgroundImage: `url(${bg5})`,
				width: `100%`,
				height: `100vh`,
				backgroundRepeat: `no-repeat`,
				backgroundSize: `cover`,
				backgroundAttachment: `local`,
				display: `flex`,
				justifyContent: `center`,
			}}>
			<div style={{ display: `flex` }}>
				<div
					style={{
						paddingTop: `10vh`,
						PaddingBottom: `10vh`,
						paddingLeft: `5vw`,
					}}>
					<h1
						style={{
							fontSize: `7vw`,
							lineHeight: `9rem`,
							fontFamily: `font-family: Sequel100Black-65`,
							color: `#000000`,
						}}>
						RENAN E RAYAN
					</h1>
					<p
						style={{
							background: `#FFFFFF`,
							borderRadius: `33px`,
							padding: `3vw`,
							marginRight: `10vw`,
							fontWeight: `400`,
							fontStyle: `Book`,
							align: `justify`,
							fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
							fontSize: `1.6vw`,
							letterSpacing: `.3ex`,
							lineHeight: `1.8ex`,
						}}>
						Fundadores da Burityps, Rayan e Renan são
						irmãos, residentes em João Pessoa capital da
						Paraíba. Desde muito cedo inconformados, saíram
						do interior do estado para a capital em busca de
						uma vida melhor, e o comércio foi a alternativa
						encontrada naquele momento. Foram algumas
						tentativas frustradas ao longo da caminhada até
						que em um dado momento conheceram as apostas
						esportivas, a princípio como apostadores
						recreativos, e assim como acontece para todos
						eles, o mercado só servia para entreter e lhes
						tirar uma parcela dos seus ganhos tão suados,
						que já não eram grandes coisas. Mas diferente da
						maioria que desiste, ainda como comerciantes,
						eles enxergaram que ali havia uma oportunidade
						de faturar ao menos uma renda extra, logo
						começaram a estudar incansavelmente até
						desenvolverem métodos que fossem lucrativos,
						como ainda fazem.
					</p>
				</div>
				<div
					style={{
						backgroundImage: `url(${carvao})`,
						backgroundRepeat: `no-repeat`,
						backgroundSize: `cover`,
						backgroundAttachment: `local`,
						height: `40vh`,
						marginTop: `20vh`,
						marginBottom: `20vh`,
						marginLeft: `20vw`,
						paddingLeft: `3vw`,
						width: `24vw`,
					}}>
					<StaticImage
						style={{
							position: `relative`,
							width: `38vw`,
							height: `36vh`,
							marginTop: `2vh`,
							marginLeft: `-29vw`,
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
			id="resultados"
			style={{
				display: `flex`,
				backgroundImage: `url(${bg2})`,
				width: `100%`,
				backgroundRepeat: `no-repeat`,
				backgroundSize: `cover`,
				backgroundAttachment: `local`,
				alignItems: `center`,
				justifyContent: `center`,
			}}>
			<div
				style={{
					display: "flex",
					flexDirection: `column`,
					paddingBottom: `10vh`,
					paddingTop: `13vh`,
				}}>
				<h1
					style={{
						fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
						paddingBottom: `3vh`,
						fontWeight: `500`,
						fontSize: `6vw`,
						lineHeight: `57px`,
						textAlign: `center`,
						color: `#FFFFFF`,
					}}>
					EXEMPLOS DE ENTRADA
				</h1>
				<FlexColumn>
					<Flex>
						<div
							style={{
								marginTop: `10px`,
								width: `458.76px`,
								height: `286.47px`,
								background: `rgba(0, 0, 0, 0.4)`,
								borderRadius: `22px`,
								padding: `10px`,
							}}>
							<div
								style={{
									width: `438.62px`,
									height: `37px`,
									background: `#000000`,
									borderRadius: `18.5px`,
									paddingTop: `8px`,
								}}>
								<h1
									style={{
										fontSize: `20px`,
										lineHeight: `19px`,
										textAlign: `center`,
										color: `#FFFFFF`,
										fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
									}}>
									EXEMPLO DE HANDCAP ASIÁTICO
								</h1>
							</div>

							<div
								style={{
									marginTop: `5px`,
									width: `439px`,
									height: `225px`,
									background: `rgba(0, 0, 0, 0.4)`,
									borderRadius: `22px`,
									padding: `10px`,
								}}>
								<p
									style={{
										fontSize: `17px`,
										lineHeight: `20px`,
										textAlign: `justify`,
										color: `ThreeDLightShadow`,
									}}>
									(1 - 1) FC Zdas Nad Szavou + 2.0{" "}
									<span
										style={{
											fontWeight: `700`,
											color: `#fff`,
										}}>
										1900
									</span>
									<br />
									Ao Vivo - HandCap asiático <br />
									Vysocina Jhleave B + (1 - 1) FC Zdas Nad
									Szavou + 2.0 <br />
									<span
										style={{
											fontWeight: `700`,
											color: `#fff`,
										}}>
										Vysocina Jhleave B | Lateral
									</span>
								</p>
								<div
									style={{
										marginTop: `10px`,
										width: `401px`,
										height: `1px`,
										background: `#FFFFFF`,
									}}></div>

								<div
									style={{
										display: `Flex`,
										FlexTemplateColumns: `repeat(2, minmax(0, 1fr))`,
									}}>
									<p
										style={{
											fontSize: `17px`,
											lineHeight: `20px`,
											textAlign: `justify`,
											color: `ThreeDLightShadow`,
										}}>
										Aposta <br />{" "}
										<span
											style={{
												fontWeight: `700`,
												color: `#fff`,
											}}>
											R$ 500,00
										</span>
									</p>
									<p
										style={{
											fontSize: `17px`,
											lineHeight: `20px`,
											textAlign: `justify`,
											color: `ThreeDLightShadow`,
										}}>
										Remessa <br />{" "}
										<span
											style={{
												fontWeight: `700`,
												color: `#fff`,
											}}>
											R$ 950,00
										</span>
									</p>
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
									}}>
									<p
										style={{
											fontSize: `24px`,
											lineHeight: `118.8%`,
											color: `#000000`,
											fontWeight: `800`,
											fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
										}}>
										ENCERRAR APOSTA R$ 624,42{" "}
									</p>
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
								padding: `10px`,
							}}>
							<div
								style={{
									width: `438.62px`,
									height: `37px`,
									background: `#000000`,
									borderRadius: `18.5px`,
									paddingTop: `8px`,
								}}>
								<h1
									style={{
										fontSize: `20px`,
										lineHeight: `19px`,
										textAlign: `center`,
										color: `#FFFFFF`,
										fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
									}}>
									EXEMPLO DE HANDCAP ASIÁTICO
								</h1>
							</div>
							<div
								style={{
									marginTop: `5px`,
									width: `439px`,
									height: `225px`,
									background: `rgba(0, 0, 0, 0.4)`,
									borderRadius: `22px`,
									padding: `10px`,
								}}>
								<p
									style={{
										fontSize: `17px`,
										lineHeight: `20px`,
										textAlign: `justify`,
										color: `ThreeDLightShadow`,
									}}>
									(1 - 1) FC Zdas Nad Szavou + 2.0
									<span
										style={{
											fontWeight: `700`,
											color: `#fff`,
										}}>
										1900
									</span>
									<br />
									Ao Vivo - HandCap asiático <br />
									Vysocina Jhleave B + (1 - 1) FC Zdas Nad
									Szavou + 2.0 <br />
									<span
										style={{
											fontWeight: `700`,
											color: `#fff`,
										}}>
										Vysocina Jhleave B | Lateral
									</span>
								</p>
								<div
									style={{
										marginTop: `10px`,
										width: `401px`,
										height: `1px`,
										background: `#FFFFFF`,
									}}></div>

								<div
									style={{
										display: `Flex`,
										FlexTemplateColumns: `repeat(2, minmax(0, 1fr))`,
									}}>
									<p
										style={{
											fontSize: `17px`,
											lineHeight: `20px`,
											textAlign: `justify`,
											color: `ThreeDLightShadow`,
										}}>
										Aposta <br />{" "}
										<span
											style={{
												fontWeight: `700`,
												color: `#fff`,
											}}>
											R$ 500,00
										</span>
									</p>
									<p
										style={{
											fontSize: `17px`,
											lineHeight: `20px`,
											textAlign: `justify`,
											color: `ThreeDLightShadow`,
										}}>
										Remessa <br />{" "}
										<span
											style={{
												fontWeight: `700`,
												color: `#fff`,
											}}>
											R$ 950,00
										</span>
									</p>
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
									}}>
									<p
										style={{
											fontSize: `24px`,
											lineHeight: `118.8%`,
											color: `#000000`,
											fontWeight: `800`,
											fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
										}}>
										ENCERRAR APOSTA R$ 624,42{" "}
									</p>
								</button>
							</div>
						</div>
						<div
							style={{
								width: `458.76px`,
								height: `286.47px`,
								background: `rgba(0, 0, 0, 0.4)`,
								borderRadius: `22px`,
								padding: `10px`,
								marginTop: `10px`,
							}}>
							<div
								style={{
									width: `438.62px`,
									height: `37px`,
									background: `#000000`,
									borderRadius: `18.5px`,
									paddingTop: `8px`,
								}}>
								<h1
									style={{
										fontSize: `20px`,
										lineHeight: `19px`,
										textAlign: `center`,
										color: `#FFFFFF`,
										fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
									}}>
									EXEMPLOS DE CANTOS HT
								</h1>
							</div>
							<div
								style={{
									marginTop: `5px`,
									width: `439px`,
									height: `225px`,
									background: `rgba(0, 0, 0, 0.4)`,
									borderRadius: `22px`,
									padding: `10px`,
								}}>
								<p
									style={{
										fontSize: `17px`,
										lineHeight: `20px`,
										textAlign: `justify`,
										color: `ThreeDLightShadow`,
									}}>
									(1 - 1) FC Zdas Nad Szavou + 2.0{" "}
									<span
										style={{
											fontWeight: `700`,
											color: `#fff`,
										}}>
										1900
									</span>
									<br />
									Ao Vivo - HandCap asiático <br />
									Vysocina Jhleave B + (1 - 1) FC Zdas Nad
									Szavou + 2.0 <br />
									<span
										style={{
											fontWeight: `700`,
											color: `#fff`,
										}}>
										Vysocina Jhleave B | Lateral
									</span>
								</p>
								<div
									style={{
										marginTop: `10px`,
										width: `401px`,
										height: `1px`,
										background: `#FFFFFF`,
									}}></div>

								<div
									style={{
										display: `Flex`,
										FlexTemplateColumns: `repeat(2, minmax(0, 1fr))`,
									}}>
									<p
										style={{
											fontSize: `17px`,
											lineHeight: `20px`,
											textAlign: `justify`,
											color: `ThreeDLightShadow`,
										}}>
										Aposta <br />{" "}
										<span
											style={{
												fontWeight: `700`,
												color: `#fff`,
											}}>
											R$ 500,00
										</span>
									</p>
									<p
										style={{
											fontSize: `17px`,
											lineHeight: `20px`,
											textAlign: `justify`,
											color: `ThreeDLightShadow`,
										}}>
										Remessa <br />{" "}
										<span
											style={{
												fontWeight: `700`,
												color: `#fff`,
											}}>
											R$ 950,00
										</span>
									</p>
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
									}}>
									<p
										style={{
											fontSize: `24px`,
											lineHeight: `118.8%`,
											color: `#000000`,
											fontWeight: `800`,
											fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
										}}>
										ENCERRAR APOSTA R$ 624,42{" "}
									</p>
								</button>
							</div>
						</div>
					</Flex>
					<Flex>
						<div
							style={{
								marginTop: `10px`,
								width: `458.76px`,
								height: `286.47px`,
								background: `rgba(0, 0, 0, 0.4)`,
								borderRadius: `22px`,
								padding: `10px`,
							}}>
							<div
								style={{
									width: `438.62px`,
									height: `37px`,
									background: `#000000`,
									borderRadius: `18.5px`,
									paddingTop: `8px`,
								}}>
								<h1
									style={{
										fontSize: `20px`,
										lineHeight: `19px`,
										textAlign: `center`,
										color: `#FFFFFF`,
										fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
									}}>
									EXEMPLO DE HANDCAP ASIÁTICO HT
								</h1>
							</div>
							<div
								style={{
									marginTop: `5px`,
									width: `439px`,
									height: `225px`,
									background: `rgba(0, 0, 0, 0.4)`,
									borderRadius: `22px`,
									padding: `10px`,
								}}>
								<p
									style={{
										fontSize: `17px`,
										lineHeight: `20px`,
										textAlign: `justify`,
										color: `ThreeDLightShadow`,
									}}>
									(1 - 1) FC Zdas Nad Szavou + 2.0{" "}
									<span
										style={{
											fontWeight: `700`,
											color: `#fff`,
										}}>
										1900
									</span>
									<br />
									Ao Vivo - HandCap asiático <br />
									Vysocina Jhleave B + (1 - 1) FC Zdas Nad
									Szavou + 2.0 <br />
									<span
										style={{
											fontWeight: `700`,
											color: `#fff`,
										}}>
										Vysocina Jhleave B | Lateral
									</span>
								</p>
								<div
									style={{
										marginTop: `10px`,
										width: `401px`,
										height: `1px`,
										background: `#FFFFFF`,
									}}></div>

								<div
									style={{
										display: `Flex`,
										FlexTemplateColumns: `repeat(2, minmax(0, 1fr))`,
									}}>
									<p
										style={{
											fontSize: `17px`,
											lineHeight: `20px`,
											textAlign: `justify`,
											color: `ThreeDLightShadow`,
										}}>
										Aposta <br />{" "}
										<span
											style={{
												fontWeight: `700`,
												color: `#fff`,
											}}>
											R$ 500,00
										</span>
									</p>
									<p
										style={{
											fontSize: `17px`,
											lineHeight: `20px`,
											textAlign: `justify`,
											color: `ThreeDLightShadow`,
										}}>
										Remessa <br />{" "}
										<span
											style={{
												fontWeight: `700`,
												color: `#fff`,
											}}>
											R$ 950,00
										</span>
									</p>
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
									}}>
									<p
										style={{
											fontSize: `24px`,
											lineHeight: `118.8%`,
											color: `#000000`,
											fontWeight: `800`,
											fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
										}}>
										ENCERRAR APOSTA R$ 624,42{" "}
									</p>
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
								padding: `10px`,
							}}>
							<div
								style={{
									width: `438.62px`,
									height: `37px`,
									background: `#000000`,
									borderRadius: `18.5px`,
									paddingTop: `8px`,
								}}>
								<h1
									style={{
										fontSize: `20px`,
										lineHeight: `19px`,
										textAlign: `center`,
										color: `#FFFFFF`,
										fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
									}}>
									EXEMPLO DE CANTO EUROPEU HT
								</h1>
							</div>
							<div
								style={{
									marginTop: `5px`,
									width: `439px`,
									height: `225px`,
									background: `rgba(0, 0, 0, 0.4)`,
									borderRadius: `22px`,
									padding: `10px`,
								}}>
								<p
									style={{
										fontSize: `17px`,
										lineHeight: `20px`,
										textAlign: `justify`,
										color: `ThreeDLightShadow`,
									}}>
									(1 - 1) FC Zdas Nad Szavou + 2.0{" "}
									<span
										style={{
											fontWeight: `700`,
											color: `#fff`,
										}}>
										1900
									</span>
									<br />
									Ao Vivo - HandCap asiático <br />
									Vysocina Jhleave B + (1 - 1) FC Zdas Nad
									Szavou + 2.0 <br />
									<span
										style={{
											fontWeight: `700`,
											color: `#fff`,
										}}>
										Vysocina Jhleave B | Lateral
									</span>
								</p>
								<div
									style={{
										marginTop: `10px`,
										width: `401px`,
										height: `1px`,
										background: `#FFFFFF`,
									}}></div>

								<div
									style={{
										display: `Flex`,
										FlexTemplateColumns: `repeat(2, minmax(0, 1fr))`,
									}}>
									<p
										style={{
											fontSize: `17px`,
											lineHeight: `20px`,
											textAlign: `justify`,
											color: `ThreeDLightShadow`,
										}}>
										Aposta <br />{" "}
										<span
											style={{
												fontWeight: `700`,
												color: `#fff`,
											}}>
											R$ 500,00
										</span>
									</p>
									<p
										style={{
											fontSize: `17px`,
											lineHeight: `20px`,
											textAlign: `justify`,
											color: `ThreeDLightShadow`,
										}}>
										Remessa <br />{" "}
										<span
											style={{
												fontWeight: `700`,
												color: `#fff`,
											}}>
											R$ 950,00
										</span>
									</p>
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
									}}>
									<p
										style={{
											fontSize: `24px`,
											lineHeight: `118.8%`,
											color: `#000000`,
											fontWeight: `800`,
											fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
										}}>
										ENCERRAR APOSTA R$ 624,42{" "}
									</p>
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
								padding: `10px`,
							}}>
							<div
								style={{
									width: `438.62px`,
									height: `37px`,
									background: `#000000`,
									borderRadius: `18.5px`,
									paddingTop: `8px`,
								}}>
								<h1
									style={{
										fontSize: `20px`,
										lineHeight: `19px`,
										textAlign: `center`,
										color: `#FFFFFF`,
										fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
									}}>
									EXEMPLO DE CANTO + 0.5 HT
								</h1>
							</div>
							<div
								style={{
									marginTop: `5px`,
									width: `439px`,
									height: `225px`,
									background: `rgba(0, 0, 0, 0.4)`,
									borderRadius: `22px`,
									padding: `10px`,
								}}>
								<p
									style={{
										fontSize: `17px`,
										lineHeight: `20px`,
										textAlign: `justify`,
										color: `ThreeDLightShadow`,
									}}>
									(1 - 1) FC Zdas Nad Szavou + 2.0{" "}
									<span
										style={{
											fontWeight: `700`,
											color: `#fff`,
										}}>
										1900
									</span>
									<br />
									Ao Vivo - HandCap asiático <br />
									Vysocina Jhleave B + (1 - 1) FC Zdas Nad
									Szavou + 2.0 <br />
									<span
										style={{
											fontWeight: `700`,
											color: `#fff`,
										}}>
										Vysocina Jhleave B | Lateral
									</span>
								</p>
								<div
									style={{
										marginTop: `10px`,
										width: `401px`,
										height: `1px`,
										background: `#FFFFFF`,
									}}></div>

								<div
									style={{
										display: `Flex`,
										FlexTemplateColumns: `repeat(2, minmax(0, 1fr))`,
									}}>
									<p
										style={{
											fontSize: `17px`,
											lineHeight: `20px`,
											textAlign: `justify`,
											color: `ThreeDLightShadow`,
										}}>
										Aposta <br />{" "}
										<span
											style={{
												fontWeight: `700`,
												color: `#fff`,
											}}>
											R$ 500,00
										</span>
									</p>
									<p
										style={{
											fontSize: `17px`,
											lineHeight: `20px`,
											textAlign: `justify`,
											color: `ThreeDLightShadow`,
										}}>
										Remessa <br />{" "}
										<span
											style={{
												fontWeight: `700`,
												color: `#fff`,
											}}>
											R$ 950,00
										</span>
									</p>
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
									}}>
									<p
										style={{
											fontSize: `24px`,
											lineHeight: `118.8%`,
											color: `#000000`,
											fontWeight: `800`,
											fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
										}}>
										ENCERRAR APOSTA R$ 624,42{" "}
									</p>
								</button>
							</div>
						</div>
					</Flex>
				</FlexColumn>
			</div>
		</section>
		<section
			id="perguntas"
			style={{
				backgroundImage: `url(${bg6})`,
				width: `100%`,
				backgroundRepeat: `no-repeat`,
				backgroundSize: `cover`,
				backgroundAttachment: `local`,
			}}>
			<div
				style={{ marginLeft: `5vw`, marginRight: `5vw` }}>
				{" "}
				<h1
					style={{
						fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
						paddingTop: `100px`,
						fontWeight: `500`,
						fontSize: `70px`,
						lineHeight: `57px`,
						textAlign: `center`,
						color: `#FFFFFF`,
					}}>
					PERGUNTAS FREQUENTES
				</h1>
				<Flex1100>
					<Pergunta href="#perguntas">
						<p>Como funciona o serviço?</p>
						<Resposta>
							Trabalhamos prestando consultoria em um grupo
							de WhatsApp, onde você recebe diariamente as
							melhores entradas para ser lucrativo. Operamos
							de forma profissional, com 2 apostadores com
							anos de experiência. Em todos nossos meses de
							operação, não tivemos prejuízo mensal.
						</Resposta>
					</Pergunta>
					<Pergunta href="#perguntas">
						<p>Como funciona a gestão?</p>
						<Resposta>
							Dividimos a banca em 40 unidades (2.5%) e de
							acordo com o grau de confiança de cada
							análise, a gente indica com quanto entrar em
							cada entrada.
						</Resposta>
					</Pergunta>
				</Flex1100>
				<div style={{ display: `flex`, margin: `3vw` }}>
					<Pergunta href="#perguntas">
						Vocês fazem minhas apostas?
					</Pergunta>
					<Pergunta href="#perguntas">
						As apostas são Pré-Jogo ou Ao Vivo?
					</Pergunta>
				</div>
				<div style={{ display: `flex`, margin: `3vw` }}>
					<Pergunta href="#perguntas">
						Qual a média de lucro mensal?
					</Pergunta>
					<Pergunta href="#perguntas">
						Quais mercados vocês mais atuam?
					</Pergunta>
				</div>
				<div style={{ display: `flex`, margin: `3vw` }}>
					<Pergunta href="#perguntas">
						Eu tenho meu emprego fixo, consigo conciliar com
						o investimento nas apostas esportivas?
					</Pergunta>
					<Pergunta href="#perguntas">
						Quais esportes vocês operam?
					</Pergunta>
				</div>
				<div style={{ display: `flex`, margin: `3vw` }}>
					<Pergunta href="#perguntas">
						Como vocês conseguem se manter lucrativos por
						tanto tempo consecutivo?
					</Pergunta>
					<Pergunta href="#perguntas">
						Tenho suporte em caso de dificuldades de
						adaptação?
					</Pergunta>
				</div>
				<div style={{ display: `flex`, margin: `3vw` }}>
					<Pergunta href="#perguntas">
						Apostas dá a entender que é algo somente para
						“brincar” ou se divertir.
					</Pergunta>
					<Pergunta href="#perguntas">
						Vocês possuem alguma rede social para que eu
						possa acompanhar o trabalho?
					</Pergunta>
				</div>
			</div>
		</section>
		<section
			id="fale"
			style={{
				backgroundImage: `url(${bg7})`,
				width: `100%`,
				backgroundRepeat: `no-repeat`,
				backgroundSize: `cover`,
				backgroundAttachment: `local`,
				paddingTop: `500px`,
			}}>
			<Flex1100
				style={{
					width: `100%`,
					background: `rgba(0, 0, 0, 0.7)`,
					justifyContent: `space-between`,
				}}>
				<div style={{ padding: `3vw` }}>
					<StaticImage
						src="../images/logo_footer.svg"
						quality={100}
						placeholder="blurred"
						layout="fixed"
					/>
				</div>
				<div style={{ padding: `3vw` }}>
					<Flex1100
						style={{
							display: `flex`,
							justifyContent: `space-between`,
						}}>
						<div
							style={{
								width: `290.31px`,
								height: `204.35px`,
								background: `rgba(0, 0, 0, 0.7)`,
								borderRadius: `31.297px`,
								padding: `10px`,
							}}>
							<h1
								style={{
									width: `218.01px`,
									height: `18px`,
									fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
									fontSize: `29px`,
									lineHeight: `29px`,
									textAlign: `center`,
									color: `#FFFFFF`,
								}}>
								CONTATOS
							</h1>
							<p
								style={{
									fontSize: `17px`,
									lineHeight: `20px`,
									textAlign: `justify`,
									color: `ThreeDLightShadow`,
									marginTop: `1vw`,
									margin: `1vw`,
								}}>
								(62) 9917 - 6902 | (83) 99991 - 6709 <br />{" "}
								<span
									style={{
										color: `#FFFFFF`,
										fontWeight: `700`,
									}}>
									contato@burityps.com.br
								</span>
								<br />
							</p>
							<p
								style={{
									color: `#FFFFFF`,
									fontWeight: `700`,
									paddingTop: `20px`,
								}}>
								Redes Sociais:
							</p>
							<div
								style={{
									display: `Flex`,
								}}>
								<button>
									<StaticImage
										style={{ margin: `1vw` }}
										src="../images/insta.svg"
										quality={100}
										placeholder="blurred"
										layout="fixed"
									/>
								</button>
								<button>
									<StaticImage
										style={{ margin: `1vw` }}
										src="../images/tt.svg"
										quality={100}
										placeholder="blurred"
										layout="fixed"
									/>
								</button>
							</div>
						</div>

						<div
							style={{
								padding: `1vw`,
								background: `rgba(0, 0, 0, 0.7)`,
								borderRadius: `31.297px`,
							}}>
							<h1
								style={{
									width: `218.01px`,
									height: `18px`,
									fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
									fontSize: `29px`,
									lineHeight: `29px`,
									textAlign: `center`,
									color: `#FFFFFF`,
								}}>
								NOVIDADES
							</h1>
							<p
								style={{
									fontSize: `17px`,
									lineHeight: `20px`,
									textAlign: `justify`,
									color: `ThreeDLightShadow`,
									marginTop: `10px`,
									padding: `10px`,
								}}>
								Preencha seu e-mail abixo para receber
								novidades <br /> exclusivas. Fique
								tranquilo, não enviaremos nenhum <br /> tipo
								de spam
							</p>
							<form>
								<input
									type="email"
									placeholder="Digite seu email"
									style={{
										width: `100%`,
										height: `43.73px`,
										background: `#D8D8D8`,
										borderRadius: `14px`,
										marginLeft: `10px`,
										paddingLeft: `10px`,
										flexShrink: `1`,
									}}></input>
								<button
									type="submit"
									style={{
										width: `107.34px`,
										height: `43.73px`,
										background: `#0EDB69`,
										borderRadius: `14px`,
										marginLeft: `5px`,
										color: `white`,
										fontSize: `20px`,
										fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
									}}>
									Enviar
								</button>
							</form>
						</div>
					</Flex1100>
					<Whatsapp
						style={{
							margin: `1vw`,
							width: `100%`,
							height: `48.15px`,
							background: `rgba(0, 0, 0, 0.7)`,
							borderRadius: `31.297px`,
							display: `Flex`,
							FlexTemplateColumns: `repeat(2, minmax(0, 1fr))`,
							padding: `5px`,
							alignItems: `center`,
						}}>
						<div>
							<StaticImage
								src="../images/wpp_p.svg"
								quality={100}
								placeholder="blurred"
								layout="fixed"
							/>
						</div>
						<p
							style={{
								minWidth: `400px`,
								height: `12.95px`,
								fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
								fontSize: `22px`,
								lineHeight: `19px`,
								color: `#FFFFFF`,
								fontWeight: `600`,
							}}>
							Fale direto pelo whatsapp
						</p>
					</Whatsapp>
				</div>
			</Flex1100>
		</section>
	</div>
);
export default IndexPage;
