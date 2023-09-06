import Modal from 'react-modal';
import styled from 'styled-components'

interface GuideContainerProps {
	showGuide: boolean;
	onToggleGuide: () => void;
}

const GuideBlock = styled.div`
	padding-bottom: 30px;
`;

const customStyles = {
content: {
	top: '10%',
	left: '10%',
	right: '10%',
	bottom: '10%',
},
}

export default function GuideContainer(prop: GuideContainerProps) {

	return (
		<>
			<Modal
				isOpen={prop.showGuide}
				// onRequestClose={closeModal}
				contentLabel="Example Modal"
				style={customStyles}
			>
				<div>
					<GuideBlock>
						<h4>Guideline</h4>
						<p>Headings</p>
						<code># This is an H1<br />
							## This is an H2<br />
							###### This is an H6<br />

							This is also an H1<br />
							==================<br />

							This is also an H2<br />
							------------------<br />
						</code>
					</GuideBlock>

					<GuideBlock>
						<h4>Paragraphs</h4>
						<p>Paragraphs are separated by empty lines. To create a new paragraph, press "return" twice.</p>
						<code>Paragraph 1<br />
						<br />
						Paragraph 2<br />
						</code>
					</GuideBlock>

					<GuideBlock>
						<h4>Character styles</h4>
						<code>*Italic characters*<br />
						_Italic characters_<br />
						**bold characters**<br />
						__bold characters__<br />
						~~strikethrough text~~<br />
						</code>
					</GuideBlock>

					<GuideBlock>
						<h4>Unordered list</h4>
						<code>*  Item 1<br />
						*  Item 2<br />
						*  Item 3<br />
						&ensp;*  Item 3a<br />
						&ensp;*  Item 3b<br />
						&ensp;*  Item 3c<br />
						</code>
					</GuideBlock>

					<GuideBlock>
						<h4>Ordered list</h4>
						<code>1.  Step 1<br />
						2.  Step 2<br />
						3.  Step 3<br />
						&ensp;1.  Step 3.1<br />
						&ensp;2.	Step 3.2<br />
						&ensp;3.  Step 3.3<br />
						</code>
					</GuideBlock>

					<GuideBlock>
						<h4>List in list</h4>
						<code>1.  Step 1<br />
						2.  Step 2<br />
						3.  Step 3<br />
						&ensp;*  Step 3a<br />
						&ensp;*	 Step 3b<br />
						&ensp;*  Step 3c<br />
						</code>
					</GuideBlock>

					<GuideBlock>
						<h4>Quotes or citations</h4>
						<p>Introducing my quote:</p>
						<code>Introducing my quote:<br />
						&gt; Neque porro quisquam est qui <br />
						&gt; dolorem ipsum quia dolor sit amet, <br />
						&gt; consectetur, adipisci velit...<br />
						</code>
					</GuideBlock>

					<button type="button" className="btn btn-secondary" onClick={prop.onToggleGuide}>Close</button>
				</div>
			</Modal>
		</>
	)
}