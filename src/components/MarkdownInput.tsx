import { useState, ChangeEvent } from 'react';

import styled from 'styled-components'

interface MarkdownInputProps {
	value: string,
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}


export default function MarkdownInput(prop: MarkdownInputProps) {

	const InputContainer = styled.textarea`
		width: 100%;
		border: 2px solid white;
		border-radius: 10px;
		color:white;
  `;

	const StyledTextArea = styled.div`
	
	`;

	return (
		// <StyledTextArea>
		<InputContainer onChange={prop.onChange} value={prop.value}></InputContainer>
		// <InputContainer onChange={prop.onChange}></InputContainer>
		// </StyledTextArea>
	)

}