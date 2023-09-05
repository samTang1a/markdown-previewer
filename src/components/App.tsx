import { useState } from 'react'

import Header from './Header'
import MarkdownGuide from './MarkdownGuide'
import MarkdownInput from './MarkdownInput'
import MarkdownOutput from './MarkdownOutput'



export default function App() {

	const [markdown, setMarkdown] = useState(`#Hellow World`)
	const [showGuide, setShowGuide] = useState(false)


	let onToggleGuide = () => {
		setShowGuide(!showGuide)
	}

	let handleChange = (value: string) => {

		
		setMarkdown(value)
	}

	return (
		<>
			<Header onToggleGuide={onToggleGuide} />


			<MarkdownGuide />
			
			
			<MarkdownInput onChange={handleChange} />

			
			<MarkdownOutput />
		
		
		</>
	)




}