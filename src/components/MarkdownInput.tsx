import { ChangeEvent } from 'react';

import styled from 'styled-components'

interface MarkdownInputProps {
	value: string,
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}


const InputContainer = styled.textarea`
	width: 100%;
	height: 80vh;
	border: 2px solid white;
	border-radius: 10px;
	color: white;
`;

const StyledTextArea = styled.div`

`;

export default function MarkdownInput(prop: MarkdownInputProps) {

	return (
		<>
			<StyledTextArea>Input</StyledTextArea>
			<InputContainer onChange={prop.onChange} value={prop.value}></InputContainer>
		</>
	)

}