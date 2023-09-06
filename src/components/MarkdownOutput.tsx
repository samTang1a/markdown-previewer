import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

interface MarkdownOutputProps {
	markdown: string
}

const MarkdownOutputStyle = styled.div`
border: 2px solid black;
width: 100%;
height: 80vh;
border-radius: 10px;
`;

export default function MarkdownOutput(prop: MarkdownOutputProps) {
	return (
		<>
			Output
			<MarkdownOutputStyle>
				<ReactMarkdown children={prop.markdown} />
			</MarkdownOutputStyle>
		</>
	)
}