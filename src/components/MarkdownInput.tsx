import { useState, ChangeEvent } from 'react';

import styled from 'styled-components'

interface MarkdownInputProps {
	value: string,
	onChange: (value: ChangeEvent<HTMLInputElement>) => void
}


export default function MarkdownInput(prop: MarkdownInputProps) {

	const InputContainer = styled.textarea`
		rows: 5;
		cols: 5;
  `;

	const StyledTextArea = styled.textarea`


	`;


	return (
		<>
			<textarea onChange={prop.onChange}>

			</textarea>
		</>
	)

}