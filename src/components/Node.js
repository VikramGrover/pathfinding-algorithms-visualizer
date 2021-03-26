import { useState } from 'react'
import React from 'react'
import { getNodeColorClass, getNodeTypeEnum } from '../utils/util.js'

const Node = ({ nodeId, size, nodeState, setGridState, draggingSelection, setDraggingSelection }) => {
    const nodeDim = {
        width: size,
        height: size
    };

    const mouseDowned = () => {
        if (nodeState[0] === getNodeTypeEnum('none')) {
            setDraggingSelection(getNodeTypeEnum('obstacle'));
            setGridState(prevState => ({ ...prevState, [nodeId]: [getNodeTypeEnum('obstacle'), ...prevState[nodeId]] }));
            return;
        }
        else if (nodeState[0] === getNodeTypeEnum('obstacle')) {
            setGridState(prevState => ({ ...prevState, [nodeId]: prevState[nodeId].slice(1) }));
            setDraggingSelection(getNodeTypeEnum('remObstacle'));
            return;
        }

        setDraggingSelection(nodeState[0]);
    };

    const mouseEntered = () => {
        if (draggingSelection === getNodeTypeEnum('remObstacle') && nodeState[0] === getNodeTypeEnum('obstacle')) {
            setGridState(prevState => ({ ...prevState, [nodeId]: prevState[nodeId].slice(1) }));
        }
        else if (draggingSelection === getNodeTypeEnum('obstacle') && nodeState[0] === getNodeTypeEnum('none')) {
            setGridState(prevState => ({ ...prevState, [nodeId]: [getNodeTypeEnum('obstacle'), ...prevState[nodeId]] }));
        }
        else if (draggingSelection === getNodeTypeEnum('start')) {
            setGridState(prevState => ({ ...prevState, [nodeId]: [getNodeTypeEnum('start'), ...prevState[nodeId]] }));
        }
        else if (draggingSelection === getNodeTypeEnum('target')) {
            setGridState(prevState => ({ ...prevState, [nodeId]: [getNodeTypeEnum('target'), ...prevState[nodeId]] }));
        }
    };

    const mouseLeft = () => {
        let currNodeState = nodeState;

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
        <div style={{ ...nodeDim }} className={`node ${getNodeColorClass(nodeState[0])}`} onMouseDown={mouseDowned} onMouseUp={mouseUped} onMouseEnter={mouseEntered} onMouseLeave={mouseLeft} >
        </div>
    )
}

export default Node
