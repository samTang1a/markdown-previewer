import styled from 'styled-components'
import { useState } from 'react';

interface HeaderProps {
	onToggleGuide: () => void;
}

export default function Header(prop: HeaderProps) {

	const Button = styled.button`

	`;

	const Title = styled.h2`

	`;

	return (
		<nav>
			<Title>Markdown Previewer</Title>
			<Button className="btn btn-dark" onClick={prop.onToggleGuide}>Show Guide / Hide Guide</Button>
		</nav>
	)
}