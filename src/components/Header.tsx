import styled from 'styled-components';

interface HeaderProps {
	onToggleGuide: () => void;
}

const Button = styled.button`
	&:hover {
		background: white;
		color:black;
	}
`;

const Title = styled.h2`
`;

export default function Header(prop: HeaderProps) {

	return (
		<>
			<nav className="navbar">
				<Title>Markdown Previewer</Title>
				<Button className="btn btn-dark" onClick={prop.onToggleGuide}>Show Guide</Button>
			</nav>
		</>
	)
}