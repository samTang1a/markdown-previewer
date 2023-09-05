import styled from 'styled-components'
import { useState } from 'react';


interface HeaderProps {
	onToggleGuide: () => void;
}

export default function Header(prop: HeaderProps) {

	const Button = styled.button`
  	display: inline-block;
  	color: #BF4F74;
  	font-size: 1em;
  	margin: 1em;
  	padding: 0.25em 1em;
  	border: 2px solid #BF4F74;
  	border-radius: 3px;
  	display: block;

		&:hover {
			background-color: #0056b3;
		}
	`;

	const Title = styled.h1`
		font-size: 1.5em;
  	text-align: center;
  	color: palevioletred;
	`;

	return (
		<nav>
			<Title>Markdown Previewer</Title>
			<Button onClick={prop.onToggleGuide}></Button>
		</nav>
	)
}