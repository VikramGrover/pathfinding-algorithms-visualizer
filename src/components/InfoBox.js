import { useState } from 'react'
import closeIcon from '../images/close.svg'
import { pathfindingAlgoInfo } from '../utils/constants.js'

const InfoBox = ({ infoBoxOpen, toggleInfoBox, selectedAlgo }) => {
    const [dragging, setDragging] = useState(false);
    const [boxCord, setBoxCord] = useState([300, 0]);

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
            {(pathfindingAlgoInfo[selectedAlgo] && pathfindingAlgoInfo[selectedAlgo].description) || <p>No information.</p>}
            {(pathfindingAlgoInfo[selectedAlgo] && pathfindingAlgoInfo[selectedAlgo].optimality)}
        </div >
    )
}

export default InfoBox
