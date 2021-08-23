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

const MenuIcon = styled.button`
	position: fixed;
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 1.5rem;
	background: #0edb69;
	border: none;
	cursor: pointer;
	z-index: 5;
	visibility: hidden;
	@media only screen and (max-width: 1000px) {
		visibility: visible;
	}
	div {
		margin: 1rem;
		width: 1.5rem;
		height: 0.2rem;
		background: black;
		border-radius: 5px;
		transform-origin: 1px;
		position: relative;
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
						<a href="#home">HOME</a>
					</li>
					<div
						style={{
							marginTop: `1rem`,
							width: `100%`,
							height: `0.2rem`,
							background: `black`,
							borderRadius: `5px`,
							position: `relative`,
						}}
					/>
					<li>
						<a href="#empresa">EMPRESA</a>
					</li>
					<div
						style={{
							marginTop: `1rem`,
							width: `100%`,
							height: `0.2rem`,
							background: `black`,
							borderRadius: `5px`,
							position: `relative`,
						}}
					/>
					<li>
						<a href="#planos">PLANOS</a>
					</li>
					<div
						style={{
							marginTop: `1rem`,
							width: `100%`,
							height: `0.2rem`,
							background: `black`,
							borderRadius: `5px`,
							position: `relative`,
						}}
					/>
					<li>
						<a href="#rr">RENNAN E RAYAN</a>
					</li>
					<div
						style={{
							marginTop: `1rem`,
							width: `100%`,
							height: `0.2rem`,
							background: `black`,
							borderRadius: `5px`,
							position: `relative`,
						}}
					/>
					<li>
						<a href="#perguntas">PERGUNTAS FREQUENTES</a>
					</li>
					<div
						style={{
							marginTop: `1rem`,
							width: `100%`,
							height: `0.2rem`,
							background: `black`,
							borderRadius: `5px`,
							position: `relative`,
						}}
					/>
					<li>
						<a href="#resultados">RESULTADOS</a>
					</li>
					<div
						style={{
							marginTop: `1rem`,
							width: `100%`,
							height: `0.2rem`,
							background: `black`,
							borderRadius: `5px`,
							position: `relative`,
						}}
					/>
					<li>
						<a href="#fale">FALE CONOSCO</a>
					</li>
				</ul>
			</MenuLinks>
		</Wrapper>
	);
};

export default Menu;
