import React from "react";
import { useState } from "react";
import styled, {
	createGlobalStyle,
} from "styled-components";

const Global = createGlobalStyle`
body,html {margin:0;padding:0;overflow-x:hidden;}`;

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 5vh;
	background: #0edb69;
	display: flex;
	flex-direction: row;
	justify-content: center;
	visibility: hidden;

	@media only screen and (max-width: 1000px) {
		visibility: visible;
	}
`;

const Divisoria = styled.div`
	margin-top: 1rem;
	width: 100%;
	height: 0.2rem;
	background: black;
	border-radius: 5px;
	position: relative;
`;

const MenuIcon = styled.button`
	position: fixed;
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 2.5rem;
	background: #0edb69;
	border: none;
	cursor: pointer;
	z-index: 9;
	visibility: hidden;
	@media only screen and (max-width: 1000px) {
		visibility: visible;
	}
	div {
		width: 1.5rem;
		height: 0.2rem;
		background: black;
		border-radius: 5px;
		transform-origin: 1px;
		position: relative;
		z-index: 10;
		transition: opacity 300ms, transform 300ms;

		:first-child {
			transform: ${({ nav }) =>
				nav ? "rotate(45deg)" : "rotate(0)"};
		}
		:nth-child(2) {
			opacity: ${({ nav }) => (nav ? "0" : "1")};
		}
		:nth-child(3) {
			transform: ${({ nav }) =>
				nav ? "rotate(-45deg)" : "rotate(0)"};
		}
	}
`;

const MenuLinks = styled.nav`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	height: 100vh;
	background: #0edb69;
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	transition: transform 300ms;
	transform: ${({ nav }) =>
		nav ? "translatey(0)" : "translatey(-100%)"};
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	li {
		margin-top: 1rem;
	}
	a {
		text-decoration: none;
		color: black;
		font-size: 1.5rem;
		transition: color 300ms;
		font-weight: 700;
		:hover {
			color: #afa;
		}
	}
	visibility: hidden;
	@media only screen and (max-width: 1000px) {
		visibility: visible;
	}
`;

const Menu = () => {
	const [nav, showNav] = useState(false);
	return (
		<Wrapper>
			<Global />
			<MenuIcon nav={nav} onClick={() => showNav(!nav)}>
				<div />
				<div />
				<div />
			</MenuIcon>
			<MenuLinks nav={nav}>
				<ul>
					<li>
						<a href="#home"nav={nav} onClick={() => showNav(!nav)}>HOME</a>
					</li>
					<Divisoria />
					<li>
						<a href="#empresa"nav={nav} onClick={() => showNav(!nav)}>EMPRESA</a>
					</li>
					<Divisoria />
					<li>
						<a href="#planos" nav={nav} onClick={() => showNav(!nav)}>PLANOS</a>
					</li>
					<Divisoria />
					<li>
						<a href="#rr"nav={nav} onClick={() => showNav(!nav)}>RENNAN E RAYAN</a>
					</li>
					<Divisoria />
					<li>
						<a href="#perguntas"nav={nav} onClick={() => showNav(!nav)}>PERGUNTAS FREQUENTES</a>
					</li>
					<Divisoria />
					<li>
						<a href="#resultados"nav={nav} onClick={() => showNav(!nav)}>RESULTADOS</a>
					</li>
					<Divisoria />
					<li>
						<a href="#fale"nav={nav} onClick={() => showNav(!nav)}>FALE CONOSCO</a>
					</li>
				</ul>
			</MenuLinks>
		</Wrapper>
	);
};

export default Menu;
