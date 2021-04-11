import React from 'react'
import { useEffect, useState } from 'react'
import { EMPTY_NODE_BORDER_COLOR, nodeColors, nodeTypeEnum } from '../utils/constants.js'
import { getNodeColor } from '../utils/helper.js'

const Node = ({ nodeId, size, setGridState, draggingSelection, setDraggingSelection, setStartCord, setTargetCord, runningAlgo, selectedObstacle, startingState }) => {
    const [nodeState, setNodeState] = useState(startingState);

    useEffect(() => {
        setGridState(prevState => ({ ...prevState, [nodeId]: [startingState, setNodeState] }));
    }, []);

    const nodeColor = getNodeColor(nodeState);
    const nodeStyle = {
        width: size,
        height: size,
        backgroundColor: nodeColor,
        border: `1px solid ${nodeState[0] === nodeTypeEnum.none ? EMPTY_NODE_BORDER_COLOR : nodeColor}`
    };

    if (draggingSelection === nodeTypeEnum.start || draggingSelection === nodeTypeEnum.target) {
        nodeStyle.cursor = 'grabbing';
    }

    const mouseDowned = () => {
        if (nodeState[0] <= nodeTypeEnum.none) {
            setDraggingSelection(nodeTypeEnum[selectedObstacle]);
            setNodeState(prevState => [nodeTypeEnum[selectedObstacle], nodeTypeEnum.none]);
            setGridState(prevState => ({ ...prevState, [nodeId]: [[nodeTypeEnum[selectedObstacle], nodeTypeEnum.none], setNodeState] }));
            return;
        }
        else if (nodeState[0] >= nodeTypeEnum.wall) {
            setNodeState(prevState => prevState.slice(1));
            setGridState(prevState => ({ ...prevState, [nodeId]: [nodeState.slice(1), setNodeState] }));
            setDraggingSelection(nodeTypeEnum.remObstacle);
            return;
        }
        else if (nodeState[0] === nodeTypeEnum.start || nodeState[0] === nodeTypeEnum.target) {
            setGridState(prevState => ({ ...prevState, [nodeId]: [nodeState.slice(1), setNodeState] }));
        }

        setDraggingSelection(nodeState[0]);
    };

    const mouseEntered = () => {
        if (draggingSelection === nodeTypeEnum.remObstacle && nodeState[0] >= nodeTypeEnum.wall) {
            setNodeState(prevState => prevState.slice(1));
            setGridState(prevState => ({ ...prevState, [nodeId]: [nodeState.slice(1), setNodeState] }));
        }
        else if (draggingSelection === nodeTypeEnum[selectedObstacle] && nodeState[0] <= nodeTypeEnum.none) {
            setNodeState(prevState => [nodeTypeEnum[selectedObstacle], nodeTypeEnum.none]);
            setGridState(prevState => ({ ...prevState, [nodeId]: [[nodeTypeEnum[selectedObstacle], nodeTypeEnum.none], setNodeState] }));
        }
        else if (draggingSelection === nodeTypeEnum.start) {
            setNodeState(prevState => [draggingSelection, ...prevState]);
        }
        else if (draggingSelection === nodeTypeEnum.target) {
            setNodeState(prevState => [draggingSelection, ...prevState]);
        }
    };

    const mouseLeft = () => {
        if (draggingSelection === nodeTypeEnum.start || draggingSelection === nodeTypeEnum.target) {
            setNodeState(prevState => prevState.slice(1));
            return;
        }
    };

    const mouseUped = () => {
        if (draggingSelection === nodeTypeEnum.start) {
            setStartCord(nodeId);
            setGridState(prevState => ({ ...prevState, [nodeId]: [nodeState, setNodeState] }));
        }
        else if (draggingSelection === nodeTypeEnum.target) {
            setTargetCord(nodeId);
            setGridState(prevState => ({ ...prevState, [nodeId]: [nodeState, setNodeState] }));
        }
        if (draggingSelection !== nodeTypeEnum.none) {
            setDraggingSelection(nodeTypeEnum.none);
        }
    };

    return (
        <div style={nodeStyle} className={`node ${draggingSelection === nodeTypeEnum.remObstacle && 'erasing'}`} onMouseDown={runningAlgo ? null : mouseDowned} onMouseUp={runningAlgo ? null : mouseUped} onMouseEnter={runningAlgo ? null : mouseEntered} onMouseLeave={runningAlgo ? null : mouseLeft} >
        </div>
    );
};

export default Node
