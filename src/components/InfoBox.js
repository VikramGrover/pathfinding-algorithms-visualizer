import { useState } from 'react'
import closeIcon from '../images/close.svg'
import { pathfindingAlgoInfo } from '../utils/constants.js'

const InfoBox = ({ infoBoxOpen, toggleInfoBox, selectedAlgo }) => {
    const [dragging, setDragging] = useState(false);
    const [prevMouseCord, setPrevMouseCord] = useState([0, 0]);
    const [boxCord, setBoxCord] = useState([300, 0]);

    const boxStyle = {
        left: boxCord[0],
        top: boxCord[1]
    }

    const enableDragging = (e) => {
        setDragging(true);
        setPrevMouseCord([e.clientX, e.clientY]);
    };

    const beingDragged = (e) => {
        if (dragging) {
            const xDiff = e.clientX - prevMouseCord[0];
            const yDiff = e.clientY - prevMouseCord[1];

            setBoxCord(prevState => [prevState[0] + xDiff, prevState[1] + yDiff]);
            setPrevMouseCord([e.clientX, e.clientY]);
        }
    };

    const disableDragging = (e) => {
        setDragging(false);
        console.log("dragging enabled");
    };

    return (
        <div style={boxStyle} className={`info-box ${infoBoxOpen ? 'visible' : 'hidden'}`} onMouseMove={beingDragged} onMouseUp={disableDragging}>
            <img className='close-info-icon' src={closeIcon} onClick={toggleInfoBox} />
            <h1 onMouseDown={enableDragging} >{selectedAlgo}</h1>
            {(pathfindingAlgoInfo[selectedAlgo] && pathfindingAlgoInfo[selectedAlgo].description) || <p>No information.</p>}
            {(pathfindingAlgoInfo[selectedAlgo] && pathfindingAlgoInfo[selectedAlgo].optimality)}
        </div >
    )
}

export default InfoBox
