import React from 'react'
import { getNodeColorClass, getNodeTypeEnum } from '../utils/util.js'

const Node = React.memo(({ nodeId, size, nodeState, setGridState, draggingSelection, setDraggingSelection, setStartCord, setTargetCord, runningAlgo, selectedObstacle }) => {
    const nodeDim = {
        width: size,
        height: size
    };

    const mouseDowned = () => {
        if (nodeState[0] === getNodeTypeEnum('none') || nodeState[0] === getNodeTypeEnum('path') || nodeState[0] === getNodeTypeEnum('visited')) {
            setDraggingSelection(getNodeTypeEnum(selectedObstacle));
            setGridState(prevState => ({ ...prevState, [nodeId]: [getNodeTypeEnum(selectedObstacle), getNodeTypeEnum('none')] }));
            return;
        }
        else if (nodeState[0] >= getNodeTypeEnum('wall')) {
            setGridState(prevState => ({ ...prevState, [nodeId]: prevState[nodeId].slice(1) }));
            setDraggingSelection(getNodeTypeEnum('remObstacle'));
            return;
        }

        setDraggingSelection(nodeState[0]);
    };

    const mouseEntered = () => {
        if (draggingSelection === getNodeTypeEnum('remObstacle') && nodeState[0] >= getNodeTypeEnum('wall')) {
            setGridState(prevState => ({ ...prevState, [nodeId]: prevState[nodeId].slice(1) }));
        }
        else if (draggingSelection === getNodeTypeEnum(selectedObstacle) && (nodeState[0] === getNodeTypeEnum('path') || nodeState[0] === getNodeTypeEnum('visited') || nodeState[0] === getNodeTypeEnum('none'))) {
            setGridState(prevState => ({ ...prevState, [nodeId]: [getNodeTypeEnum(selectedObstacle), getNodeTypeEnum('none')] }));
        }
        else if (draggingSelection === getNodeTypeEnum('start')) {
            setGridState(prevState => ({ ...prevState, [nodeId]: [getNodeTypeEnum('start'), ...prevState[nodeId]] }));
            setStartCord(nodeId);
        }
        else if (draggingSelection === getNodeTypeEnum('target')) {
            setGridState(prevState => ({ ...prevState, [nodeId]: [getNodeTypeEnum('target'), ...prevState[nodeId]] }));
            setTargetCord(nodeId);
        }
    };

    const mouseLeft = () => {
        if (draggingSelection === getNodeTypeEnum('start') || draggingSelection === getNodeTypeEnum('target')) {
            setGridState(prevState => ({ ...prevState, [nodeId]: prevState[nodeId].slice(1) }));
            return;
        }
    };

    const mouseUped = () => {
        if (draggingSelection !== getNodeTypeEnum('none')) {
            setDraggingSelection(getNodeTypeEnum('none'));
        }
    };

    return (
        <div style={{ ...nodeDim }} className={`node ${getNodeColorClass(nodeState[0])}`} onMouseDown={runningAlgo ? null : mouseDowned} onMouseUp={runningAlgo ? null : mouseUped} onMouseEnter={runningAlgo ? null : mouseEntered} onMouseLeave={runningAlgo ? null : mouseLeft} >
        </div>
    );
});

export default Node
