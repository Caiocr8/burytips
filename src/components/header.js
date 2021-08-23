import React from "react";
import styled from "styled-components";

const HeaderList = styled.ul`
	margin: 3vw;
	position: fixed;
	display: flex;
	font-size: 1.6vw;
	padding: 1vw;
	font-weight: 700;
	justify-content: space-between;
	width: 94%;
	@media only screen and (max-width: 1000px) {
		visibility: hidden;
	}
`;

const Button = styled.a`
	padding: 0.8vw;
	background-color: #0edb69;
	border-radius: 1vw
`;

function Header() {
	return (
		<HeaderList>
			<Button href="#home">
				<li>HOME</li>
			</Button>
			<Button href="#empresa">
				<li style={{ fontWeight: `700` }}>EMPRESA</li>
			</Button>
			<Button href="#planos">
				<li style={{ fontWeight: `700` }}>PLANOS</li>
			</Button>
			<Button href="#rr">
				<li style={{ fontWeight: `700` }}>
					RENNAN E RAYAN
				</li>
			</Button>
			<Button href="#perguntas">
				<li style={{ fontWeight: `700` }}>
					PERGUNTAS FREQUENTES
				</li>
			</Button>
			<Button href="#resultados">
				<li style={{ fontWeight: `700` }}>RESULTADOS</li>
			</Button>
			<Button href="#fale">
				<li style={{ fontWeight: `700` }}>FALE CONOSCO</li>
			</Button>
		</HeaderList>
	);
}

export default Header;
