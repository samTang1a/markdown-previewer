// import React from 'react'
// import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import styled from 'styled-components'

interface MarkdownOutputProps {
	markdown: string
}

export default function MarkdownOutput(prop: MarkdownOutputProps) {

	const MarkdownOutputStyle = styled.div`
		border: 2px solid black;
		width: 100%;
		height: 100%;
		border-radius: 10px;
	`;

	return (
		<MarkdownOutputStyle>
			<ReactMarkdown children={prop.markdown} />
		</MarkdownOutputStyle>
	)
}