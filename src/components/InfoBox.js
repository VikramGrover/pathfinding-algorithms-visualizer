import { useState } from 'react'
import closeIcon from '../images/close.svg'
import { codeBlockCustomStyle, pathfindingAlgoInfo } from '../utils/constants.js'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const InfoBox = ({ infoBoxOpen, toggleInfoBox, selectedAlgo, startingPos }) => {
    const [dragging, setDragging] = useState(false);
    const [boxCord, setBoxCord] = useState(startingPos);

    const enableDragging = (e) => {
        setDragging(true);
    };

    const beingDragged = (e) => {
        if (dragging) {
            setBoxCord(prevState => [prevState[0] + e.movementX, prevState[1] + e.movementY]);
        }
    };

    const disableDragging = (e) => {
        setDragging(false);
    };

    return (
        <div style={{ left: `${boxCord[0]}px`, top: `${boxCord[1]}px` }} className={`info-box ${infoBoxOpen ? 'visible' : 'hidden'}`} onMouseMove={beingDragged} onMouseUp={disableDragging} onMouseLeave={disableDragging}>
            <img className='close-info-icon' src={closeIcon} onClick={toggleInfoBox} alt='Close info box' />
            <h1 onMouseDown={enableDragging} >{selectedAlgo}</h1>
            {(pathfindingAlgoInfo[selectedAlgo] && pathfindingAlgoInfo[selectedAlgo].summary) || <p>No information.</p>}
            {pathfindingAlgoInfo[selectedAlgo] && pathfindingAlgoInfo[selectedAlgo].description}
            {pathfindingAlgoInfo[selectedAlgo] && pathfindingAlgoInfo[selectedAlgo].pseudocode && <p className='identifier'>Pseudocode:</p>}
            {pathfindingAlgoInfo[selectedAlgo] && pathfindingAlgoInfo[selectedAlgo].pseudocode && <SyntaxHighlighter language="python" style={atomOneDark} showLineNumbers={true} wrapLines={true} customStyle={codeBlockCustomStyle}>
                {pathfindingAlgoInfo[selectedAlgo].pseudocode}
            </SyntaxHighlighter>}
        </div >
    )
}

export default InfoBox
