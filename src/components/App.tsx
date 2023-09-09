import { useState, ChangeEvent } from 'react'
import Header from './Header'
import MarkdownGuide from './MarkdownGuide'
import MarkdownInput from './MarkdownInput'
import MarkdownOutput from './MarkdownOutput'

export default function App() {

	const [markdown, setMarkdown] = useState(`# Hello World`)
	const [showGuide, setShowGuide] = useState(false)

	let onToggleGuide = () => {
		setShowGuide(!showGuide)
	}

	let handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setMarkdown(event.target.value)
	}

	return (
		<div className='container'>
			<Header onToggleGuide={onToggleGuide} />
			<MarkdownGuide showGuide={showGuide} onToggleGuide={onToggleGuide}/>
				
			<div className='row pt-2'>
				<div className='col-sm-6' >
					<MarkdownInput onChange={handleChange} value={markdown} />
				</div>
				<div className='col-sm-6'>
					<MarkdownOutput markdown={markdown} />
				</div>
			</div>
		</div>
	)
}