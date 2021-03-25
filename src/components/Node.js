import { useState } from 'react'
import React from 'react'
import { getNodeColor, getNodeTypeEnum } from '../utils/util.js'
import startNodeImg from '../images/start.png'
import targetNodeImg from '../images/target.png'
import obstacleNodeImg from '../images/obstacle.png'

const Node = ({ nodeId, size, nodeState, setGridState, draggingSelection, setDraggingSelection }) => {
    const nodeDim = {
        width: size,
        height: size
    };

    const imgDim = {
        width: size * 0.8,
        height: size * 0.8
    };

    const mouseDowned = () => {
        const currNodeState = nodeState;

        if (currNodeState[0] === getNodeTypeEnum('none')) {
            setDraggingSelection(getNodeTypeEnum('obstacle'));
            setGridState(prevState => ({ ...prevState, [nodeId]: [getNodeTypeEnum('obstacle'), ...prevState[nodeId]] }));
            return;
        }
        else if (currNodeState[0] === getNodeTypeEnum('obstacle')) {
            setGridState(prevState => ({ ...prevState, [nodeId]: prevState[nodeId].slice(1) }));
            return;
        }

        setDraggingSelection(currNodeState[0]);
    };

    const mouseEntered = () => {
        let currNodeState = nodeState;

        if (draggingSelection === getNodeTypeEnum('obstacle') && currNodeState[0] === getNodeTypeEnum('none')) {
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
        <div style={{ ...nodeDim, backgroundColor: getNodeColor(nodeState[0]) }} className='node' onMouseDown={mouseDowned} onMouseUp={mouseUped} onMouseEnter={mouseEntered} onMouseLeave={mouseLeft} >
        </div>
    )
}

export default Node
