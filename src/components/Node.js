import React from 'react'
import { nodeColorClass, nodeTypeEnum } from '../utils/constants.js'
// import eraser from '../images/eraser.svg'

const Node = React.memo(({ nodeId, size, nodeState, setGridState, draggingSelection, setDraggingSelection, setStartCord, setTargetCord, runningAlgo, selectedObstacle }) => {
    const nodeStyle = {
        width: size,
        height: size
    };

    if (draggingSelection === nodeTypeEnum.start || draggingSelection === nodeTypeEnum.target) {
        nodeStyle.cursor = 'grabbing';
    }

    const mouseDowned = () => {
        if (nodeState[0] <= nodeTypeEnum.none) {
            setDraggingSelection(nodeTypeEnum[selectedObstacle]);
            setGridState(prevState => ({ ...prevState, [nodeId]: [nodeTypeEnum[selectedObstacle], nodeTypeEnum.none] }));
            return;
        }
        else if (nodeState[0] >= nodeTypeEnum.wall) {
            setGridState(prevState => ({ ...prevState, [nodeId]: prevState[nodeId].slice(1) }));
            setDraggingSelection(nodeTypeEnum.remObstacle);
            return;
        }

        setDraggingSelection(nodeState[0]);
    };

    const mouseEntered = () => {
        if (draggingSelection === nodeTypeEnum.remObstacle && nodeState[0] >= nodeTypeEnum.wall) {
            setGridState(prevState => ({ ...prevState, [nodeId]: prevState[nodeId].slice(1) }));
        }
        else if (draggingSelection === nodeTypeEnum[selectedObstacle] && nodeState[0] <= nodeTypeEnum.none) {
            setGridState(prevState => ({ ...prevState, [nodeId]: [nodeTypeEnum[selectedObstacle], nodeTypeEnum.none] }));
        }
        else if (draggingSelection === nodeTypeEnum.start) {
            setGridState(prevState => ({ ...prevState, [nodeId]: [draggingSelection, ...prevState[nodeId]] }));
            setStartCord(nodeId);
        }
        else if (draggingSelection === nodeTypeEnum.target) {
            setGridState(prevState => ({ ...prevState, [nodeId]: [draggingSelection, ...prevState[nodeId]] }));
            setTargetCord(nodeId);
        }
    };

    const mouseLeft = () => {
        if (draggingSelection === nodeTypeEnum.start || draggingSelection === nodeTypeEnum.target) {
            setGridState(prevState => ({ ...prevState, [nodeId]: prevState[nodeId].slice(1) }));
            return;
        }
    };

    const mouseUped = () => {
        if (draggingSelection !== nodeTypeEnum.none) {
            setDraggingSelection(nodeTypeEnum.none);
        }
    };

    return (
        <div style={nodeStyle} className={`node ${nodeColorClass[nodeState[0]]} ${draggingSelection === nodeTypeEnum.remObstacle && 'erasing'}`} onMouseDown={runningAlgo ? null : mouseDowned} onMouseUp={runningAlgo ? null : mouseUped} onMouseEnter={runningAlgo ? null : mouseEntered} onMouseLeave={runningAlgo ? null : mouseLeft} >
        </div>
    );
});

export default Node
